import React from 'react'
import Layout from '../../components/Dashboards/Layout'
import DoctorProfile from '../../components/Dashboards/Doctors/Doctors'

const profile = () => {
  return (
    <Layout Children={<DoctorProfile />} />
  )
}

export default profile