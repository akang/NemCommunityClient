package org.nem.ncc.escrow;

import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.model.*;
import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class EscrowMapper
{
    public static Collection<EscrowAccountViewModel> toViewModelList(final Collection<? extends EscrowAccount> escrowAccounts) {
        final Comparator<EscrowAccount> byTimeCreated = (a, b) -> a.getCreated().compareTo(b.getCreated());
        final Map<TradeInstrument, Optional<EscrowAccount>> latestAccounts = escrowAccounts.stream().filter(escrow -> escrow.getCreated().toEpochMilli() != 0L).collect(Collectors.groupingBy((Function<? super EscrowAccount, ? extends TradeInstrument>)EscrowAccount::getTradeInstrument, (Collector<? super EscrowAccount, ?, Optional<EscrowAccount>>)Collectors.maxBy((Comparator<? super EscrowAccount>)byTimeCreated)));
        return escrowAccounts.stream().map(escrow -> new EscrowAccountViewModel(escrow, escrow.equals(latestAccounts.getOrDefault(escrow.getTradeInstrument(), Optional.empty()).orElse(null)))).collect((Collector<? super Object, ?, Collection<EscrowAccountViewModel>>)Collectors.toList());
    }
}
