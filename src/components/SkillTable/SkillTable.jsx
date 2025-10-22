
import React from 'react';
import styles from './SkillTable.module.css';

export const SkillTable = ({ skillOrder }) => {
  const skills = skillOrder.split('');

  return (
    <div className={styles.skillOrderWrapper}>
      <div className={styles.wrapper}>
        {skills.map((skill, index) => {
          const level = index + 1;
          return (
            <React.Fragment key={level}>
              <div className={styles.skillOrder}>
                <div className={styles.level}>{level}</div>
                <div className={styles.skill}>{skill}</div>

              </div>
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
}
