import TabButtons from '../../components/TabButtons/TabButtons'
import Tabs from './../../components/Tabs/Tabs'
import BookedDropdowns from '../../components/Dropdowns/BookedDropdowns'
import NotBookedDropdowns from '../../components/Dropdowns/NotBookedDropdowns'

import Plan from '../../components/Plan/Plan'
import PlanCard from '../../components/PlanCard/PlanCard'
import NoTrips from '../../components/NoListed/NoTrips'
import NoBookings from '../../components/NoListed/NoBookings'
import HeaderExpenses from '../../components/Expenses/HeaderExpenses'
import BodyExpenses from '../../components/Expenses/BodyExpenses'
import FooterExpenses from '../../components/Expenses/FooterExpenses'
import { useParams } from 'react-router-dom'


const TripDetail = () => {

    const { id } = useParams()
    console.log(id)

    return (
        <div className="TripDetail">
            <Tabs />
            <Plan />
            <TabButtons />
            <BookedDropdowns id={id} />
            <NotBookedDropdowns />
            <PlanCard />
            <NoTrips />
            <NoBookings />
            <HeaderExpenses />
            <BodyExpenses />
            <FooterExpenses />
        </div>
    )

}

export default TripDetail