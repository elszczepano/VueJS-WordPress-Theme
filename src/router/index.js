import Vue from 'vue';
import Router from 'vue-router';
import Main from '../Components/Main';
import ArticlePage from '../Components/ArticlePage';
import ArticlesList from '../Components/ArticlesList';
import Page from '../Components/Page';
import Search from '../Components/Search';
import Subscribed from '../Components/Subscribed';
import Unsubscribe from '../Components/Unsubscribe';
import Portfolio from '../Components/Portfolio';
import Categories from '../Components/Categories';
import CategoryArticles from '../Components/CategoryArticles';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '*',
            name: 'home',
            component: Main
        },
        {
            path: '/post/:slug',
            alias: '/posts/:slug',
            name: 'articlePage',
            component: ArticlePage
        },
        {
            path: '/page/:slug',
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
            path: '/category/:slug',
            name: 'categoryArticle',
            component: CategoryArticles
        },
        {
            path: '/categories',
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
        },
        {
            path: '/unsubscribe',
            name: 'unsubscribe',
            component: Unsubscribe
        }
    ],

});