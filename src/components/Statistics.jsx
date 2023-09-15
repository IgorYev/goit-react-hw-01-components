import css from '../css/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <table className={css.statTable}>
        <thead>
          <tr>
            <th>Label</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(item => (
            <tr key={item.id}>
              <td>{item.label}</td>
              <td>{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
