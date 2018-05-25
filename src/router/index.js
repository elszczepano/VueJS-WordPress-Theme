import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Components/Main';
import ArticlePage from '../Components/ArticlePage';
import ArticlesList from '../Components/ArticlesList';
import Page from '../Components/Page';
import Search from '../Components/Search';
import Subscribed from '../Components/Subscribed';
import Portfolio from '../Components/Portfolio';
import Categories from '../Components/Categories';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            alias: '*',
            name: 'home',
            component: Main
        },
        {
            path: '/post/:id',
            alias: '/posts/:id',
            name: 'articlePage',
            component: ArticlePage
        },
        {
            path: '/page/:id',
            name: 'page',
            component: Page
        },
        {
            path: '/posts',
            alias: '/post',
            name: 'articlesList',
            component: ArticlesList
        },
        {
            path: '/category',
            alias: '/categories',
            name: 'categories',
            component: Categories
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/subscribed',
            name: 'subscribed',
            component: Subscribed
        }
    ],

});