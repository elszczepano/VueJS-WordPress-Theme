import Vue from 'vue';
import Router from 'vue-router';
import MainComponent from '../Components/MainComponent';
import ArticlePage from '../Components/ArticlePage';
import ArticlesList from '../Components/ArticlesList';
import Page from '../Components/Page';
import Search from '../Components/Search';
import Portfolio from '../Components/Portfolio';
import NotFound from '../Components/NotFound';
import Categories from '../Components/Categories';
import CategoryArticles from '../Components/CategoryArticles';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainComponent
        },
        {
            path: '/post/:slug',
            alias: '/posts/:slug',
            name: 'articlePage',
            component: ArticlePage
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
            path: '/:slug',
            name: 'page',
            component: Page
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});