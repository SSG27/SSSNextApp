import Link from 'next/link';
import '@/styles/Navigation.css'

const Navigation: React.FC = () => {
  return (
    <nav className="nav">
        <Link href="/">
            Introduction
        </Link>
        <br></br><br></br>
        <Link href="/search">
            Movie Search
        </Link>
    </nav>
  );
};

export default Navigation;
