import React from 'react'

import ForgotPassword from '@/app/components/ForgotPassword'
import Footer from '@/app/components/Footer'
import NavigationAlt from '@/app/components/NavigationAlt'

function LoginPage() {
  return (
    <div>
        <NavigationAlt/>
        <ForgotPassword/>
        <Footer/>   
    </div>
  )
}

export default LoginPage