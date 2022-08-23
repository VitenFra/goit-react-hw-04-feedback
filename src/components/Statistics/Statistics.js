import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage, }) => {
    
    return (
        <>  
            <ul className={css.stList}>
            <li className={css.stItem}>Добре: <span className={css.stValue}>{good}</span></li>
            <li className={css.stItem}>Нейтральний: <span className={css.stValue}>{neutral}</span></li>
            <li className={css.stItem}>Погано: <span className={css.stValue}>{bad}</span></li>
            <li className={css.stItem}>Всього: <span className={css.stValue}>{total}</span></li>
            <li className={css.stItem}>Позитивних відгуків: <span className={css.stValue}>{positivePercentage}%</span></li>
            </ul>
            </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};
