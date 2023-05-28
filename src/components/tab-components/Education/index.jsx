import React from 'react'
import './index.css'

const Education = () => {
    return (
        <div className='mainContent'>
            <div className="educationTable table-responsive">
            <p>MY ACADEMIC DETAILS</p>
                <table>
                    <thead>
                        <th>Degree</th>
                        <th>Duration</th>
                        <th>Institution</th>
                        <th>Specialization</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B. Tech</td>
                            <td>2016-2020</td>
                            <td>Cochin University, Kerala</td>
                            <td>Information Technology</td>
                        </tr>
                        <tr>
                            <td>12th</td>
                            <td>2014-2015</td>
                            <td>St Xavier's High School, Azamgarh</td>
                            <td>PCM</td>
                        </tr>
                        <tr>
                            <td>10th</td>
                            <td>2012-2013</td>
                            <td>St Xavier's High School, Azamgarh</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Education