import App from './src/App'
import './src/styles/style.css'
import './src/styles/index.css'
import ActiveItem from './src/Components/Navbar/Function'
import windowLoad from './src/Layout/function'
const root = document.getElementById('app')

root.appendChild(App())
windowLoad()

