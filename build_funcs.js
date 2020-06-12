import React from 'react'

function professional_experience(detail) {
    {detail.map(item => {
        const { title, team, when, where, bullet } = item
        return (
          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
          <div className='resume-content'>
          <h3 className='mb-0'>{title}</h3>
          <div className='subheading mb-3'>{team}</div>
          
          {bullet.map(elements => {
            return(
              <li>
                {elements}
              </li>
            )
          })
          }
          </div>
          <br></br>
      <div className='resume-date text-md-right'>
        <span className='text-primary'>{when}</span>
        <br></br>
        <span className='text-primary'>{where}</span>
      </div>
    </div>
        )
      })}
}

export { professional_experience }