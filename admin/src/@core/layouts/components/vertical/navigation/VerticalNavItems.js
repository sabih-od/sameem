import {useSelector} from "react-redux";
import {categories as categoriesList} from '../../../../../store/slices/categoriesSlice';
import {useState} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import BookIcon from "@mui/icons-material/AutoStoriesOutlined";
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import {router} from "next/client";
import {CategoryOutlined, StarBorder} from "@mui/icons-material";

const resolveNavItemComponent = item => {
    if (item.sectionTitle) return VerticalNavSectionTitle

    return VerticalNavLink
}

const VerticalNavItems = props => {
    const categories = useSelector(categoriesList);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedChildCategory, setExpandedChildCategory] = useState(null);

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const navigateToPath = (path) => {
        router.push(path).then((r => 'error'));
    };

    const handleCategoryClick = (categoryId) => {
        if (expandedCategory === categoryId) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(categoryId);
        }
    };


    // const dropdownItems = categories.map((category) => ({
    //   title: category.name,
    //   icon: BookIcon,
    //   // onClick: () => router.push(`/categoryPosts/${category.id}`),
    //   onClick: () => handleCategoryClick(category.id),
    // }));

    const dropdownItems = categories.map((category) => ({
        title: category.name,
        icon: category.children.length > 0 ? BookIcon : null,
        onClick: () => {
            if (category.children.length > 0) {
                handleCategoryClick(category.id);
            } else {
                navigateToPath(`/categoryPosts/${category.id}`);
            }
        },
    }));

    const RenderMenuItems = props.verticalNavItems?.map((item, index) => {
        const TagName = resolveNavItemComponent(item);
        return <TagName {...props} key={index} item={item}/>;
    });

    return (
        <>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="vertical"
                aria-labelledby="category-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Category List"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((category) => (
                            <div key={category.id}>
                                {category.parent_id === null && (
                                    <ListItemButton sx={{pl: 4}} onClick={() => {
                                        handleCategoryClick(category.id);
                                        navigateToPath(`/categoryPosts/${category.id}`)
                                    }}>
                                        <ListItemIcon><CategoryOutlined/></ListItemIcon>
                                        <ListItemText primary={category.name}/>
                                        {category.children.length > 0 && (
                                            expandedCategory === category.id ? <ExpandLess/> : <ExpandMore/>
                                        )}
                                    </ListItemButton>
                                )}
                                {expandedCategory === category.id && (
                                    <Collapse in={true} timeout="auto" unmountOnExit>
                                        {category.children.length > 0 && (
                                            <List component="div" disablePadding>
                                                {category.children.map((childCategory) => (
                                                    <ListItemButton
                                                        key={childCategory.id}
                                                        sx={{pl: 8}}
                                                        onClick={() => navigateToPath(`/categoryPosts/${childCategory.id}`)}
                                                    >
                                                        <ListItemIcon><StarBorder/></ListItemIcon>
                                                        <ListItemText primary={childCategory.name}/>
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        )}
                                        {/* Render posts for the expanded category */}
                                    </Collapse>
                                )}
                            </div>
                        ))}
                    </List>
                </Collapse>
                {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
                {/*  <List component="div" disablePadding>*/}
                {/*    {dropdownItems.map((item) => (*/}
                {/*        <ListItemButton key={item.title} sx={{ pl: 4 }} onClick={item.onClick}>*/}
                {/*          <ListItemIcon>*/}
                {/*            <item.icon />*/}
                {/*          </ListItemIcon>*/}
                {/*          <ListItemText primary={item.title} />*/}
                {/*        </ListItemButton>*/}
                {/*    ))}*/}
                {/*  </List>*/}
                {/*</Collapse>*/}
            </List>
            {RenderMenuItems}
        </>
    );
};

export default VerticalNavItems;
