import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import Stocks from './components/stocks/Stocks';

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stocks', component: Stocks}
];