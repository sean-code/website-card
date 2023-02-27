import './home.css';
import Profile from './assets/img/profile.jpg';

const Home = () =>{
    return(
        <>
        <div className="wrapper">
			<div className="wrapper-inner">
				<div className="box-wrapper">
					<div className="box">
						<div className="avatar">
							<img src={Profile} />
						</div>
						<div className="box-inner">
							<h3 className="name">John Sean Nganga</h3>
							<p>Hey there, welcome!</p>
							<p>My name is Nganga Sean</p>
							<h4 className="occupation"> - A boy who met Tech - </h4>
							<p className="location">
								<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzsKXY4pn7AhWK_7sIHVwdDXUQFnoECCkQAQ&url=https%3A%2F%2Fwww.google.com%2Fmymaps%2Fviewer%3Fmid%3D1s1yc_gbRmShBhwg2XYxQlDaj_UA%26hl%3Den_GB&usg=AOvVaw2OHijzogKcup12p_5XW0K0" target="_blank">
									<img src="" height="20px" />
									Nairobi, KE
								</a>
							</p>
							<h3 className="followers-title">Stalk Me Below:</h3>
							<ul className="followers-list">
								<li><a href='https://www.instagram.com/its_ngangasean' target='_blank'><img src="./img/instagram.svg" alt="" /></a></li>
								<li><a href='https://www.twitter.com/nganga_sea' target='_blank'><img src="./img/twitter.svg" alt="" /></a></li>
								<li><a href="https://www.linkedin.com/in/john-sean-nganga/" target='_blank'><img src="./img/linkedin.svg" alt="" /></a></li>
								<li><a href="https://t.me/sean_code" target='_blank'><img src="./img/send.svg" alt="" /></a></li>
								<li><a href="https://github.com/sean-code" target='_blank'><img src="./img/github.svg" alt="" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
    )
}

export default Home;