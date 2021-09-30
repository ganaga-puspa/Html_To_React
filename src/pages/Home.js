import React from 'react'
import BannerCard from '../components/BannerCard'
import BannerCardSection from '../components/BannerCardSection'
import CompanyLogoSection from '../components/CompanyLogoSection'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'
import ProductTabItemSection from '../components/ProductTabItemSection'
import ShippingSection from '../components/ShippingSection'
import SubscribeSection from '../components/SubscribeSection'

function Home() {
    return (
    
        <div>
            <Navbar />
            <HeroSlider />
            <ShippingSection />
            <BannerCardSection />
            <CompanyLogoSection />
            <ProductTabItemSection />
            <BannerCard/>
            <ProductSection />
            <SubscribeSection />
            <Footer />
</div>
    )
}

export default Home
