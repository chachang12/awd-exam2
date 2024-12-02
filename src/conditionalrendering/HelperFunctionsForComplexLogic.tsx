import React from 'react'

const HelperFunctionsForComplexLogic = () => {

  const checkAccess = (role: string) => {
    if (role === 'admin') return true;
    if (role === 'user') return false;
    return <p>ReadOnly</p>
  }

  const getGreeting = (hour: number) => {
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }; 
  return (
    <div>
        <p>
            {checkAccess('admin')}
        </p>
        <p>
            {getGreeting(10)}
        </p>
    </div>
  )
}

export default HelperFunctionsForComplexLogic