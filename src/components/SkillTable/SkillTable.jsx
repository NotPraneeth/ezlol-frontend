
import React from 'react';
import styles from './SkillTable.module.css';

export const SkillTable = ({ skillOrder }) => {
  // Pad the skills array to 18 items to ensure the grid always fills the container
  const skills = skillOrder.split('');
  while (skills.length < 18) {
    skills.push('');
  }

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
