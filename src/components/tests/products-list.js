'use strict';

let testProductsList = [
    {
      price: '$28,190 to $39,190',
      category: 'cars',
      key: 'accord',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/05/chrome-image-404234.png',
      brand: 'Honda',
      model: 'Accord',
      description: {
        about: 'Honda debuted the 10th-generation Accord for the 2018 model year, taking a new approach to performance with its two direct-injected VTEC Turbo four-cylinder engines — a 192-hp 1.5-litre and a 252-hp 2.0L, plus, the world\'s first 10-speed automatic transmission for a front-drive car (along with a 6-speed manual or a CVT, depending on the model). There are no changes for 2019. Touring trims of both 1.5L and 2.0L models feature a six-inch driver’s head-up display with selectable information, including speed, engine rpm, turn-by-turn navigation, and traffic sign recognition. Additional connected-car technologies available include automatic Bluetooth phone pairing with Near Field Communication technology, 4G LTE in-car Wi-Fi Hotspot, and Wi-Fi-enabled over-the-air system updates. The Accord’s cabin features an ultra-slim seven-inch TFT driver’s meter and a eight-inch display audio touchscreen interface with physical volume and tuning knobs and intuitive smartphone-like features and functionality including customizable app tiles and home-screen shortcuts, along with Apple CarPlay and Android Auto compatibility. The Automobile Journalists Association of Canada named the Accord Canadian Car of the Year for 2018.',
        fuelEconomy: 'City - 10.4 L/100 km / Hwy - 7.4 L/100 km',
        transmission: '6-speed manual, CVT, 10-speed automatic',
        seatingCapacity: '5',
        engine: 'Turbo 1.5 L I4 (192 hp/192 lb-ft); turbo 2.0L I4 (252 hp/273 lb-ft)',
        driveTrain: 'FWD'
      }
    },
    {
      price: '$33,490 to $40,190',
      description: {
        transmission: 'Electronic continuously variable',
        driveTrain: 'FWD',
        engine: '2.0L I4 with electric motor (212 net system hp)',
        seatingCapacity: '5',
        fuelEconomy: 'City - 5 L/100 km / Hwy - 5.1 L/100 km',
        about: 'According to Honda, the Accord Hybrid — redesigned in 2018 — boasts class-leading power, cabin space and cargo space, not to mention embodies the company’s unique approach to electrification The Hybrid lineup comes in two trim levels: Hybrid and Hybrid Touring. Both are powered by the third generation of Honda’s two-motor hybrid powertrain, which pairs a 2.0-litre DOHC i-VTEC Atkinson-cycle four-cylinder with 40% thermal efficiency with an electric propulsion motor that churns out 232 lb-ft of torque for a total system output of 212 hp. As with the previous-generation model, the Accord two-motor system operates without the need for a conventional automatic transmission.  Helping to maximize energy generation are steering wheel-mounted “deceleration selectors,” which allow the driver to toggle between four levels of regenerative braking performance. The right selector increases regenerative braking and the left selector reduces regenerative braking. The powertrain operates by shifting between three distinct drive operations: EV Drive (100% electric motor), Hybrid Drive (electric motor and gas engine driving the generator motor) and Engine Drive (gasoline engine), utilizing power from the gasoline engine and electric motors to accommodate the current driving conditions.'
      },
      model: 'Accord Hybrid',
      key: 'accordHybrid',
      category: 'cars',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/05/chrome-image-404197.png',
      brand: 'Honda'
    },
    {
      category: 'cars',
      price: '$17,890 to $29,090',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/05/chrome-image-404137.png',
      model: 'Civic',
      description: {
        about: 'The 10th-generation Civic Coupe and Sedan receive updated styling and Honda Sensing technology on all trims. Changes at the front accentuate the model\'s low and wide athletic stance and sporty with a new piano black upper fascia "wing," restyled lower fascia, bumper and lower grille, a full-width front splitter, chrome side pod accents, and updated halogen or LED headlights. DX, LX. EX and Sport trims feature a high-revving 2.0-litre 16-valve DOHC i-VTEC engine mated to either a smooth and efficient CVT with G-Shift Control or a 6-speed manual. Touring and Si models are powered by a turbocharged 1.5L four-cylinder, the Touring with 174 hp and 162 lb-ft, while the Si turns up the boost to hit 205 hp/192 lb-ft.',
        seatingCapacity: '5',
        fuelEconomy: 'City - 7.8 L/100 km / Hwy - 6.2 L/100 km',
        engine: '2.0L I4 (158 hp/138 lb-ft); turbo 1.5L I4 (174 hp/162 lb-ft)',
        driveTrain: 'FWD',
        transmission: '6-speed manual, CVT'
      },
      brand: 'Honda',
      key: 'civic'
    },
    {
      description: {
        transmission: '6-speed manual, CVT',
        about: 'The 10th-generation Civic receives updated styling and Honda Sensing technology on all trims. Changes at the front accentuate the model\'s low and wide athletic stance and sporty with a new piano black upper fascia "wing," restyled lower fascia, bumper and lower grille, a full-width front splitter, chrome side pod accents, and updated halogen or LED headlights. DX, LX. EX and Sport trims feature a high-revving 2.0-litre 16-valve DOHC i-VTEC engine mated to either a smooth and efficient CVT with G-Shift Control or a 6-speed manual. Touring and Si models are powered by a turbocharged 1.5L four-cylinder, the Touring with 174 hp and 162 lb-ft, while the Si gets bumped up to 205 hp/192 lb-ft.',
        fuelEconomy: 'City - 7.8 L/100 km / Hwy - 6.1 L/100 km',
        engine: '2.0L I4 (158 hp/138 lb-ft); turbo 1.5L I4 (174 hp/162 lb-ft); turbo 1.5L I4 (205 hp/192 lb-ft)',
        driveTrain: 'FWD',
        seatingCapacity: '5'
      },
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/05/chrome-image-404130.png',
      key: 'civicCoupe',
      brand: 'Honda',
      category: 'cars',
      price: '$21,290 to $29,490',
      model: 'Civic Coupe'
    },
    {
      category: 'cars',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/05/chrome-image-404506.png',
      price: '$22,190 to $31,390',
      description: {
        fuelEconomy: 'City - 9.3 L/100 km / Hwy - 6.5 L/100 km',
        about: 'Available in LX, Sport, Sport Touring trim levels, the Civic Hatchback is powered strictly by a 1.5-litre turbocharged four-cylinder. In the LX, the engine puts out 174 horsepower and 167 pound-feet of torque. In Sport and Sport Touring trims, there’s a bump up to 180 hp and 177 lb-ft of torque. A six-speed manual is standard, with a continuously variable transmission available. The 2019 Hatchback benefits from multiple interior updates designed to provide drivers with a more comfortable and efficient in-vehicle experience. Enhancements to technology and connectivity include an updated Display Audio system that now features physical buttons and a volume knob for more intuitive control, improved voice recognition and Bluetooth connectivity, a USB sub-cord and, similar to previous models. In addition, steering wheel controls have been upgraded for simplified operation, the electronic parking brake has an indicator light for when it\'s engaged, the centre console sports larger cup holders, and there are physical buttons for fan speed on models with dual-zone climate control.',
        driveTrain: 'FWD',
        transmission: '6-speed manual, CVT',
        seatingCapacity: '5',
        engine: 'Turbo 1.5L I4 (174/180 hp; 167/177 lb-ft)'
      },
      key: 'civicHatchback',
      model: 'Civic Hatchback',
      brand: 'Honda'
    },
    {
      model: 'Civic Type R',
      description: {
        driveTrain: 'FWD',
        transmission: '6-speed manual',
        seatingCapacity: '4',
        about: 'The new 2020 Civic Type R brings a number of changes and improvements to Type R’s formula, including revised styling, improved aerodynamic performance and the addition of standard Honda Sensing safety and driver-assistive technology. The new Type R incorporates numerous changes to improve its driving dynamics, including new two-piece brake rotors and new brake pads designed to reduce fade and improve high-speed braking efficiency. Suspension revisions include updated dampers for better ride comfort, stiffer rear bushings for better grip, and a new front suspension housing bracket to reduce friction and improve steering feel. Exterior design enhancements include a new larger front grille opening for improved engine cooling. Under the hood, the Type R continues to draw power from a 2.0-litre direct-injected and turbocharged four-cylinder putting out 306 horsepower and 295 lb-ft of torque, with power to the front wheels delivered through a close-ratio six-speed manual transmission and limited-slip differential. As before, drivers can choose between three driving modes — Comfort, Sport and +R — that vary suspension firmness, steering and throttle response. New for 2020 is Active Sound Control, which modifies interior sound in concert with chosen drive mode.',
        fuelEconomy: 'City - 10.6 L/100 km / Hwy - 8.3 L/100 km',
        engine: 'Turbo 2.0L I4 (306 hp/295 lb-ft)'
      },
      brand: 'Honda',
      category: 'cars',
      price: '$41,690',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-404512.png',
      key: 'civicTypeR'
    },
    {
      description: {
        seatingCapacity: '5',
        about: 'One of the best-selling compact crossovers in Canada, more than 500,000 of the five-passenger CR-V have been sold here since the model’s introduction back in 1997. The fifth-generation version made its debut in 2017; there are no significant changes for 2019. Each of the five models in the line-up is powered by a turbocharged 1.5-litre DOHC four-cylinder engine and mated to a continuously variable transmission with Honda G-Shift control logic. All-wheel-drive models featuring Real Time AWD come standard with the Honda Sensing suite of advanced safety and driver-assistive technologies, including road departure mitigation and adaptive cruise control with low-speed follow Additional new available driver-assistive features include rear cross-traffic monitor, blind-spot information, auto high-beam and driver attention monitor.  ',
        driveTrain: 'FWD / AWD',
        transmission: 'CVT',
        fuelEconomy: 'City - 8.4 L/100 km / Hwy - 7 L/100 km',
        engine: 'Turbo 1.5L I4 (190 hp; 179 lb-ft)'
      },
      key: 'crv',
      brand: 'Honda',
      model: 'CR-V',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-404277.png',
      category: 'suvs/crossovers',
      price: '$27,690 to $39,090'
    },
    {
      model: 'Clarity',
      brand: 'Honda',
      description: {
        fuelEconomy: 'City - 5.3 L/100 km / Hwy - 5.9 L/100 km',
        about: 'The Clarity Plug-In Hybrid is a big step forward for Honda’s electrified fleet, entering the Canadian market with the best overall combined range in its class — a combined fuel economy of 2.1 Le/100 km and an all-electric range of up to 76 km. Drivers can spend most of their daily commute on electric power with the peace of mind knowing that a gasoline engine is there to back them up when needed.   The electromotive power comes from a 181-horsepower electric motor producing 232 lb-ft of torque and drawing power from both the gasoline engine and a 17-kilowatt hour battery pack with a recharge time of just 2.5 hours at 240 volts. The Clarity Plug-in features Honda\'s two-motor hybrid powertrain that has a total system output of 212 hp. This five-seater sedan is all about comfort in the cabin, with soft-touch materials, plush leather seats and a premium yet futuristic interior. Standard features include Apple CarPlay and Android Auto, 8.0-inch display audio, HondaLink mobile app and Honda Sensing’s full suite of safety technology. ',
        engine: '1.5L I4 with electric motor (212 net system hp)',
        seatingCapacity: '5',
        driveTrain: 'FWD',
        transmission: 'Electronic continuously variable'
      },
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-404669.png',
      key: 'clarity',
      price: '$40,100 to $44,100',
      category: 'cars'
    },
    {
      brand: 'Honda',
      description: {
        fuelEconomy: 'City - 8.1 L/100 km / Hwy - 6.6 L/100 km',
        about: 'Honda’s entry-level hatchback, the subcompact Fit, received a comprehensive freshening for the 2018 model year, complete with a stylish new look, updated technology, available safety features and a new Sport trim. There are no significant changes for 2019. The Fit Sport adds an extra dose of style and attitude thanks to an aggressive aero-form front spoiler and rear diffuser, bright orange pinstriping, 16-inch aluminum alloy wheels with gloss-black finish, chrome exhaust-pipe finisher and side sill garnishes. Inside, the Sport features a black interior with orange contrast stitching. All seven trim levels are powered by a 1.5-litre four-cylinder that puts out 130 horsepower when fitted with a six-speed manual; 128 hp when hooked up to a continuously variable transmission. The Honda Sensing suite of advanced safety and driver assistive features is standard on all CVT models and includes adaptive cruise control, collision mitigation brake system incorporating forward collision warning, lane keeping assist and road departure mitigation with lane departure warning. A seven-inch display audio touchscreen featuring Apple CarPlay and Android Auto compatibility is, included on LX, Sport, EX and EX-L trims.',
        driveTrain: 'FWD',
        seatingCapacity: '5',
        engine: '1.5L I4 (130/128 hp, 114/113 lb-ft)',
        transmission: '6-speed manual, CVT'
      },
      model: 'Fit',
      category: 'cars',
      key: 'fit',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2016/11/17fit.png',
      price: '$15,590 to $24,490'
    },
    {
      price: '$23,300 to $31,900',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-402648.png',
      brand: 'Honda',
      category: 'suvs/crossovers',
      description: {
        fuelEconomy: 'City - 8.4 L/100 km / Hwy - 7 L/100 km',
        seatingCapacity: '5',
        engine: '1.8L I4 (141 hp, 127 lb-ft)',
        driveTrain: 'FWD / AWD',
        transmission: 'CVT',
        about: 'The refreshed 2019 HR-V subcompact crossover adds new Sport and Touring trims, refreshed styling, new technology, and a more refined driving experience. For the first time, HR-V now comes with standard Honda Sensing suite of advanced safety and driver-assistive technologies on all trims — including but not limited to collision mitigation braking system, forward collision warning, lane departure warning, road departure mitigation, adaptive cruise control and lane keeping assist. The continuously variable transmission has been reworked, resulting in a more natural driving feel and quieter operation. Other measures to reduce interior noise include additional sound deadening in the fenders and floor, plus the inclusion of Active Noise Cancelling on Sport and Touring trim.  All 2019 models feature revised bumpers, headlights, grille and taillights, while the new Sport and Touring trims get a unique look all their own. Blackout trim and 17-inch wheels visually distinguish Sport; Touring gets multi-element LED headlights, dark chrome trim and LED fog lights. '
      },
      model: 'HR-V',
      key: 'hrv'
    },
    {
      model: 'Ridgeline',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2020/03/chrome-image-412328.png',
      category: 'minivans/trucks',
      key: 'ridgeline',
      description: {
        driveTrain: 'AWD',
        fuelEconomy: 'City - 12.8 L/100 km / Hwy - 9.5 L/100 km',
        about: 'Having been redesigned into its second generation for 2017, the Honda Ridgeline has no major changes for 2019. Unique among current pickup offerings, the Ridgeline is a unibody and uses all-wheel drive that primarily powers the front wheels, although it’s surprisingly more off-road capable than you might expect. It uses a 3.5L V6 engine mated to a six-speed automatic, and has a top towing capacity of 5,000 lbs (2,268 kg) and maximum payload of 1,571 lbs (713 kg), depending on trim. The Ridgeline’s storage capabilities include an oversized centre console, rear seats with fold-up legs for extra under-seat storage, and a locking trunk under the cargo bed floor. The dual-action tailgate opens by dropping down or sideways like a door. Standard features include a 10-way power driver’s seat, tri-zone automatic climate control, sunroof, power-sliding rear window and adaptive cruise control, while available optional features include navigation, ventilated front seats, rain-sensing wipers, and stereo speakers integrated into the bed.',
        transmission: '6-speed automatic',
        engine: '3.5L V6 (280 hp; 262 lb-ft)',
        seatingCapacity: '5'
      },
      price: '$42,490 to $51,190',
      brand: 'Honda'
    },
    {
      brand: 'Honda',
      category: 'minivans/trucks',
      key: 'odyssey',
      description: {
        seatingCapacity: '8',
        driveTrain: 'FWD',
        about: 'Honda completely redesigned its Odyssey minivan — the fifth-generation — in 2018. With a 3.5-litre SOHC V6 offering 280 horsepower, and 9-speed and available 10-speed automatic transmissions with standard paddle shifters, the minivan offers both good performance and decent fuel economy. Odyssey also comes with the Honda Sensing suite of driver-assistive and safety technologies as standard on all trims. All trims come with display audio with Apple CarPlay and Android Auto as well as Magic Slide second-row seat. The topline Touring model’s list of available premium features and technologies include CabinWatch day/night video monitor, CabinTalk in-car PA system, 4G LTE in-car Wi-Fi, rear entertainment system with Blu-ray and streaming video, hands-free power tailgate, ventilated front seats, LED accent lighting and more',
        engine: '3.5L V6 (280 hp/262 lb-ft)',
        transmission: 'Automatic',
        fuelEconomy: 'City - 12.6 L/100 km / Hwy - 9.4 L/100 km'
      },
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2020/04/chrome-image-411324.png',
      model: 'Odyssey',
      price: '$36,290 to $52,390'
    },
    {
      key: 'passport',
      price: '$41,990 to $48,990',
      description: {
        about: 'The new 2019 Passport, slotting between the compact CR-V and three-row Pilot, is a five-passenger SUV powered by a 280-horsepower, 3.5-litre V6 that’s mated to a nine-speed automatic transmission. With a reinforced unibody frame, fully independent suspension and standard Honda i-VTM4 torque-vectoring all-wheel-drive — with four-mode Intelligent Traction Management — Passport can tackle the kind of terrain normally reserved for less refined body-on-frame or off-road focused SUVs. Intelligent Traction Management coms with available Snow, Sand and Mud modes help optimize traction on varying surfaces. Passport is offered in three trims: Sport, upgraded EX-L and fully equipped Touring. All versions feature 20-inch alloy wheels and tires, Honda Sensing suite of advanced safety and driver-assistive technology, LED headlights, fog lights, taillights and DRLs, and three-zone automatic climate control. Inside, Honda says Passport offers best-in-class passenger space (3,281 litres) and total interior volume (4,448 L) for carrying family, friends and weekend adventure gear. There’s an easy-to-clean reversible cargo floor and a large segmented under-floor cargo compartment for carrying dirty gear or keeping valuables out of sight.  ',
        driveTrain: 'AWD',
        seatingCapacity: '5',
        fuelEconomy: 'City - 12.5 L/100 km / Hwy - 9.8 L/100 km',
        transmission: '9-speed automatic',
        engine: '3.5L V6 (280 hp/262 lb-ft)'
      },
      brand: 'Honda',
      category: 'suvs/crossovers',
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-404808.png',
      model: 'Passport'
    },
    {
      imageUrl: 'https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2019/06/chrome-image-402683.png',
      category: 'suvs/crossovers',
      brand: 'Honda',
      key: 'pilot',
      description: {
        about: 'The redesigned and refreshed 2019 Pilot features a long list of upgrades including bolder exterior styling, an available hands-free power tailgate, powertrain refinements, upgrades to connected-car technology, a standard new display audio touchscreen system with Apple CarPlay and Android Auto integration, and a volume knob. For 2019, Honda introduces a Canadian-exclusive Black Edition trim featuring gloss black accents, black wheels, darkened headlights and taillights, red ambient lighting and red-accent stitched leather seats on the interior and Black Edition emblems on the exterior. Pilot remains one of the few models in its segment to offer eight-passenger seating (seven seats with the optional second-row captain’s chairs), with three-person capacity in both the second and third rows, and with third-row access made easy by the available One-Touch Walk-In feature. While all Pilots are powered by the same 3.5-litre V6 and come with Honda’s i-VTM4 all-wheel drivetrain, lower trims get a 6-speed automatic transmission while a 9-speed is standard with the Touring 7 passenger, Touring 8 Passenger and Black Edition.',
        driveTrain: 'AWD',
        fuelEconomy: 'City - 13 L/100 km / Hwy - 9.3 L/100 km',
        engine: '3.5L V6 (280 hp/262 lb-ft)',
        transmission: '6-speed automatic; 9-speed automatic',
        seatingCapacity: '5'
      },
      model: 'Pilot',
      price: '$41,290 to $54,190'
    }
  ]

export default testProductsList;