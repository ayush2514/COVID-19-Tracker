import React from 'react';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment';
import CountUp from 'react-countup'
import 'bootstrap/dist/css/bootstrap.min.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardsWorld(props) {
    const  data  = props.tot;
    const classes = useStyles();
    var time1 = moment(data.date, "YYYY-MM-DDTHH:mm:ss.SSS");
    var date = moment(time1,'DD/MM/YYYY HH:mm:ss.SSS').format('LL');
    console.log(date);
    if(!data.confirmed){
        return('Loading...')
      };
    return (
        <div className="row">
            <div className="col-md-4">
                <Card className={classes.root}  style={{borderBottom: "10px solid rgba(0,0,255,0.5)"}} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Confirmed
          </Typography>
                        <hr />
                        <Typography className={classes.title}>
                            <CountUp
                                start={0}
                                end={data.confirmed}
                                duration={3}
                                separator=","
                            />
                           
                        </Typography>
                       
                        <Typography className={classes.pos} color="textSecondary">
                            As on {date}
                        </Typography>
                        <Typography color="secondary" gutterBottom>
                            +
                            
                             <CountUp
                                start={0}
                                end= {data.todconfirmed}
                                duration={3}
                                separator=","
                            />
                           
                        </Typography>
                        <Typography variant="body2" component="p">
                            Total Cases of COVID-19
          </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="col-md-4">
                <Card className={classes.root} variant="outlined" style={{borderBottom: "10px solid rgba(0,255,0,0.5)" }}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Recovered
          </Typography>
                        <hr />
                        <Typography className={classes.title}>
                        <CountUp
                                start={0}
                                end={data.recovered}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            As on {date}
                        </Typography>
                        <Typography color="primary" gutterBottom>
                            +
                            <CountUp
                                start={0}
                                end= {data.todrecovered}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography variant="body2" component="p">
                            Total Recoveries from COVID-19
          </Typography>
                    </CardContent>
                   

                </Card>
            </div>
            <div className="col-md-4">
                <Card className={classes.root} style={{borderBottom: "10px solid rgba(255,0,0,0.5)" }} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Deceased
          </Typography>
                        <hr />
                        <Typography className={classes.title}>
                        <CountUp
                                start={0}
                                end={data.deaths}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            As on {date}
                        </Typography>
                        <Typography color="error" gutterBottom>
                            +
                            <CountUp
                                start={0}
                                end= {data.toddeaths}
                                duration={3}
                                separator=","
                            />   
                        </Typography>
                        <Typography variant="body2" component="p">
                            Total Deaths due to COVID-19
          </Typography>
                    </CardContent>
                   

                </Card>
            </div>
          

        </div>
        
    )
} 
  