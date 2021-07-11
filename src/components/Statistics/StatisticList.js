import PropTypes from 'prop-types';
import Statistic from './Statistic';
import css from './Statistic.module.css';

const defaultTitle = 'Upload stats';

export default function StatisticList({ title=defaultTitle, stats }) {
  return (<section className={css.statistics}>
      {/* {title && <h2 className="title">{title}</h2>} */}
    <h2 className={css.title}>{title}</h2>
    
     <ul className={css.stat_list}>
       {stats.map(stat =>
         <li key={stat.id} className={css.stat_list_item}><Statistic
           label={stat.label}
           percentage={stat.percentage}/>
         </li>)}
    
  </ul>
</section>);
};

StatisticList.propTypes = {
  stats:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),),
  title: PropTypes.string,
  //key: PropTypes.string.isRequired,
   
} 