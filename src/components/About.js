import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image1 from '../media/about/1.jpg';
import Image2 from '../media/about/2.jpg';
import Image3 from '../media/about/3.jpg';
import Image4 from '../media/about/4.jpg';



const useStyles = makeStyles({
    textIndent: {
        textIndent: '50px',
    },
    image: {
        padding: '20px',
        height: 'auto',
        width: '100%',
        maxWidth: '720px',
    },
  });

function About() {
    const classes = useStyles();

    
    return (
        <Grid item container justify={'center'}>

            <Grid item xs={1} sm={2} />
            <Grid item xs={10} sm={8}>
                
                <Typography gutterBottom align='left' variant='h5' component='h1' color={'primary'}>
                    About
                </Typography>
                
                <Grid container>
                    <Grid item md={12} lg={8}>
                        <Typography  align={'justify'} paragraph={true}>
                            Honda's automotive manufacturing ambitions can be traced back to 1963, with the Honda T360, a kei car truck built for the Japanese market. This was followed by the two-door roadster, the Honda S500 also introduced in 1963. In 1965, Honda built a two-door commercial delivery van, called the Honda L700. Honda's first four-door sedan was not the Accord, but the air-cooled, four-cylinder, gasoline-powered Honda 1300 in 1969. The Civic was a hatchback that gained wide popularity internationally, but it wasn't the first two-door hatchback built. That was the Honda N360, another Kei car that was adapted for international sale as the N600. The Civic, which appeared in 1972 and replaced the N600 also had a smaller sibling that replaced the air-cooled N360, called the Honda Life that was water-cooled.
                            The Honda Life represented Honda's efforts in competing in the kei car segment, offering sedan, delivery van and small pick-up platforms on a shared chassis. The Life StepVan had a novel approach that, while not initially a commercial success, appears to be an influence in vehicles with the front passengers sitting behind the engine, a large cargo area with a flat roof and a liftgate installed in back, and utilizing a transversely installed engine with a front-wheel-drive powertrain.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <img className={classes.image} src={ Image1 } alt='honda' />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item md={12} lg={8}>
                        <Typography className={classes.textIndent} align={'justify'} paragraph={true}>
                            As Honda entered into automobile manufacturing in the late 1960s, where Japanese manufacturers such as Toyota and Nissan had been making cars since before WWII, it appears that Honda instilled a sense of doing things a little differently than its Japanese competitors. Its mainstay products, like the Accord and Civic (with the exception of its USA-market 1993–97 Passport which was part of a vehicle exchange program with Isuzu (part of the Subaru-Isuzu joint venture)), have always employed front-wheel-drive powertrain implementation, which is currently a long-held Honda tradition. Honda also installed new technologies into their products, first as optional equipment, then later standard, like anti lock brakes, speed sensitive power steering, and multi-port fuel injection in the early 1980s. This desire to be the first to try new approaches is evident with the creation of the first Japanese luxury chain Acura, and was also evident with the all aluminum, mid-engined sports car, the Honda NSX, which also introduced variable valve timing technology, Honda calls VTEC.
                            The Civic is a line of compact cars developed and manufactured by Honda. In North America, the Civic is the second-longest continuously running nameplate from a Japanese manufacturer; only its perennial rival, the Toyota Corolla, introduced in 1968, has been in production longer. 

                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <img className={classes.image} src={ Image2 } alt='honda' />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item md={12} lg={8}>
                        <Typography className={classes.textIndent} align={'justify'} paragraph={true}>
                            The Civic, along with the Accord and Prelude, comprised Honda's vehicles sold in North America until the 1990s when the model lineup was expanded. Having gone through several generational changes, the Civic has become larger and more upmarket, and it currently slots between the Fit and Accord.
                            Honda produces Civic hybrid, a hybrid electric vehicle that competes with the Toyota Prius, and also produces the Insight and CR-Z.
                            In 2008, Honda increased global production to meet the demand for small cars and hybrids in the U.S. and emerging markets. The company shuffled U.S. production to keep factories busy and boost car output while building fewer minivans and sport utility vehicles as light truck sales fell.
                            Its first entrance into the pickup segment, the light-duty Ridgeline, won Truck of the Year from Motor Trend magazine in 2006. Also in 2006, the redesigned Civic won Car of the Year from the magazine, giving Honda a rare double win of Motor Trend honors.
                            It is reported that Honda plans to increase hybrid sales in Japan to more than 20% of its total sales in the fiscal year 2011, from 14.8% in the previous year.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <img className={classes.image} src={ Image3 } alt='honda' />
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid item md={12} lg={8}>
                        <Typography className={classes.textIndent} align={'justify'} paragraph={true}>
                            
                            Five of United States Environmental Protection Agency's top ten most fuel-efficient cars from 1984 to 2010 comes from Honda, more than any other automakers. The five models are: 2000–2006 Honda Insight (53 mpg‑US or 4.4 L/100 km or 64 mpg‑imp combined), 1986–1987 Honda Civic Coupe HF (46 mpg‑US or 5.1 L/100 km or 55 mpg‑imp combined), 1994–1995 Honda Civic hatchback VX (43 mpg‑US or 5.5 L/100 km or 52 mpg‑imp combined), 2006– Honda Civic Hybrid (42 mpg‑US or 5.6 L/100 km or 50 mpg‑imp combined), and 2010– Honda Insight (41 mpg‑US or 5.7 L/100 km or 49 mpg‑imp combined). The ACEEE has also rated the Civic GX as the greenest car in America for seven consecutive years.
                            Honda currently builds vehicles in factories located in Japan, the United States of America, Canada, China, Pakistan, the United Kingdom, Belgium, Brazil, Indonesia, India, Thailand, Turkey, Argentina, Mexico, Taiwan, and the Philippines.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <img className={classes.image} src={ Image4 } alt='honda' />
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={1} sm={2} />

        </Grid>
    );
}

export default About;
