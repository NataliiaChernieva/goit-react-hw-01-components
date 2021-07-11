import css from './Statistic.module.css';

export default function Statistic(props) {
    return (<>
        <span className={css.label}>{props.label}</span>
        <span className={css.percentage}>{props.percentage}%</span>
    </>);
}