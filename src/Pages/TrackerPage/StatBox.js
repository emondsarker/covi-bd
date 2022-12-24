import { Card, Typography,CardContent } from '@material-ui/core'
import React from 'react'
import './StatBox.css'
const StatBox = ({title, cases, total,active, isRed, ...props}) => {
     console.log(title, active);
    return (
        <Card onClick={props.onClick}
        className={`statBox ${active && "statBox--selected"} ${
            isRed && "statBox--red"
          }`} >
            <CardContent>
                {/* Title */}
                <Typography  color="textSecondary" gutterBottom>
                    {title}
               </Typography>
                {/* No. of cases */}
               <h2 className={`statBox__cases ${!isRed && "statBox__cases--green"}`}>{cases}</h2>
               {/* Total cases */}
                <Typography className="statBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}
export default StatBox
