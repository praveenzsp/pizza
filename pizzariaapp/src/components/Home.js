import React from 'react'

function Home() {
  return (
        <div className='main-content'>
            <div className='col-sm-12 col-md-12'>
                <h3 id='ourstory'>Our story</h3>
            </div>

            <div className='col-sm-12 col-md-12'>
                <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excue won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response provided that Prizzeria's Fersh Pan Pizza is the Tastiest Pizza event.</p>
                <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excue won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response provided that Prizzeria's Fersh Pan Pizza is the Tastiest Pizza event.</p>
                <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excue won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response provided that Prizzeria's Fersh Pan Pizza is the Tastiest Pizza event.</p>
            </div>

            <div className='row img-card'style={{display:'flex',alignItems:'center'}}>
                <img  className='col-sm-12 col-md-5' src='https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg' alt='food'/>
                <div className='col-sm-12 col-md-7'>
                    <h3>Ingredients</h3>
                    <p>We are ruthless about goodness. We've no qualms about tearing up the day-old lettuce leaf(straight from the farm) or steaming a baby(carrot) Cut Cut Chop Chop steam steam stir stir while they are still young and fresh -that's our motto. It makes the kitchen a better place.</p>
                </div>
            </div>

            <div className='row img-card' style={{display:'flex',alignItems:'center'}}>
                <div className='col-sm-12 col-md-7'>
                    <h3>Our chefs</h3>
                    <p>They makes sauces sing and salads dance. They create magic with their skill, knowledge and passion and strring spoons(among their things). They make goodness good, it deosn't know what to do with itself. We do though. WE send it to you.</p>
                </div>
                <img className='col-sm-12 col-md-5' src='https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=2IlSPfIQtxrffNhikvF06C4KgqGnuyvV5tD0GgfR9RE=' alt='chef'/>
            </div>

            <div className='row img-card'>
                <img className='col-sm-12 col-md-10' src='https://media.istockphoto.com/id/1004806630/photo/30-minutes-analog-kitchen-timer-with-red-mark-placed-on-a-fridge-in-monochrome-colors.jpg?s=612x612&w=0&k=20&c=yshTp2PZIHR2HnCmlmBUr4AwyhAxYg2X9vA7J1rGfAE=' alt='timer'/>
                <div className='col-sm-12 col-md-2' style={{display:'flex',alignItems:'center'}}>
                    <h3>45 Minute Delivery</h3>
                </div>
            </div>

        </div>
  )
}

export default Home