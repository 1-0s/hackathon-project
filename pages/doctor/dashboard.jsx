import React from 'react'
import Overview from '../../components/Dashboards/Doctors/Dashboard'
import Layout from '../../components/Dashboards/Layout'


const overview = () => {
  return (
    <Layout Children={<Overview />} />
  )
}

export default overview;