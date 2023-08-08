import BookIcon from '@mui/icons-material/AutoStoriesOutlined';
import ContactIcon from '@mui/icons-material/ContactPhoneOutlined';
import DonationIcon from '@mui/icons-material/VolunteerActivismOutlined';
import EventIcon from '@mui/icons-material/EventOutlined';
import PostIcon from '@mui/icons-material/DynamicFeedOutlined';
import {BullhornOutline} from 'mdi-material-ui';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import {useDispatch, useSelector} from "react-redux";

import {
    getCategories,
    categories as categoriesList,
} from '../../store/slices/categoriesSlice'

const navigation = () => {

    // const [categories, getCategories] = useState([]);
    const categories = useSelector(categoriesList)


    return [

        {
            title: 'Categories',
            icon: BookIcon,
            path: '/categories'
        },
        {
            title: 'Category Menus',
            icon: BookIcon,
            path: '/categoryMenus'
        },

        {
            title: 'Contacts',
            icon: ContactIcon,
            path: '/contacts'
        },

        {
            title: 'Posts',
            icon: PostIcon,
            path: '/posts',
        },

        {
            title: 'Users',
            icon: PeopleOutlinedIcon,
            path: '/users',
        },

        {
            title: 'FAQS',
            icon: BookIcon,
            path: '/faqs'
        },
        ...categories.map(category => ({
            title: category.name,
            icon: BookIcon,
            path: `/categoryPosts/${category.id}`
        }))


    ]
}

export default navigation
