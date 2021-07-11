import css from './transaction.module.css';

export default function TransactionTableHead() {
    return (
        <tr className={css.thead_row}>
            <th className={css.thead_row_title}>Type</th>
            <th className={css.thead_row_title}>Amount</th>
            <th className={css.thead_row_title}>Currency</th>
        </tr>);
}