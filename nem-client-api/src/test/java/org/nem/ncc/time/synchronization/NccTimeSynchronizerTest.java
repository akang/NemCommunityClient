package org.nem.ncc.time.synchronization;

import com.sharedobjects.nis.PrimaryNisConnector;
import org.junit.Test;
import org.mockito.Mockito;
import org.nem.core.model.primitive.TimeOffset;
import org.nem.core.time.*;
import org.nem.core.time.synchronization.CommunicationTimeStamps;

import org.nem.ncc.services.TimeSynchronizationServices;

import java.util.concurrent.CompletableFuture;

public class NccTimeSynchronizerTest {

	@Test
	public void synchronizeTimeDelegatesToTimeSynchronizationConnector() {
		// Arrange:
		final TimeSynchronizationContext context = new TimeSynchronizationContext();

		// Act:
		context.synchronizeTime();

		// Assert:
		Mockito.verify(context.connector, Mockito.times(1)).forwardAsync(Mockito.any());
	}

	@Test
	public void synchronizeTimeDelegatesToTimeProvider() {
		// Arrange:
		final TimeSynchronizationContext context = new TimeSynchronizationContext();

		// Act:
		context.synchronizeTime();

		// Assert:
		Mockito.verify(context.timeProvider, Mockito.times(2)).getNetworkTime();
	}

	@Test
	public void synchronizeTimeUpdatesTimeProviderTimeOffset() {
		// Arrange:
		final TimeSynchronizationContext context = new TimeSynchronizationContext();

		// Act:
		context.synchronizeTime();

		// Assert:
		Mockito.verify(context.timeProvider, Mockito.times(1)).updateTimeOffset(new TimeOffset(10));
	}

	@Test
	public void synchronizeTimeIsBypassedIfDisconnectedFromNis() {
		// Arrange:
		final TimeSynchronizationContext context = new TimeSynchronizationContext();
		Mockito.when(context.connector.isConnected()).thenReturn(false);

		// Act:
		context.synchronizeTime();

		// Assert:
		Mockito.verify(context.connector, Mockito.never()).forwardAsync(Mockito.any());
	}

	private class TimeSynchronizationContext {
		private final SystemTimeProvider timeProvider = Mockito.mock(SystemTimeProvider.class);
		private final TimeSynchronizationServices timeSynchronizationServices = Mockito.mock(TimeSynchronizationServices.class);
		private final PrimaryNisConnector connector = Mockito.mock(PrimaryNisConnector.class);

		public TimeSynchronizationContext() {
			Mockito.when(this.connector.isConnected()).thenReturn(true);
			Mockito.when(this.timeProvider.getNetworkTime()).thenReturn(
					new NetworkTimeStamp(0),
					new NetworkTimeStamp(10));
			Mockito.when(this.connector.forwardAsync(Mockito.any()))
					.thenReturn(CompletableFuture.completedFuture(new CommunicationTimeStamps(new NetworkTimeStamp(15), new NetworkTimeStamp(15))));
		}

		public void synchronizeTime() {
			// Arrange:
			final NccTimeSynchronizer synchronizer = new NccTimeSynchronizer(
					this.timeSynchronizationServices,
					this.timeProvider,
					this.connector);

			// Act:
			synchronizer.synchronizeTime().join();
		}
	}
}
