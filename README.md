<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# MY-SPOTIFY

<em>Streamline your music journey, discover effortlessly today!</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Mavrokai/My-Spotify?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Mavrokai/My-Spotify?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Mavrokai/My-Spotify?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)

---

## Overview

My-Spotify is a powerful developer tool designed to streamline the creation of a Spotify-like music application, combining robust backend infrastructure with an intuitive frontend.

**Why My-Spotify?**

This project empowers developers to build engaging music applications effortlessly. The core features include:

- 🎵 **Database Setup:** Easily initialize your database with a structured SQL schema for consistent environments.
- ⚙️ **React Application Configuration:** Streamline your development process with effective dependency management and scripts.
- 🚀 **Microservices Deployment:** Simplify your deployment with a cohesive architecture for both API and database services.
- 🎨 **User Interface Components:** Enhance user interaction with intuitive components for seamless navigation and exploration.
- 📊 **Performance Monitoring:** Capture key metrics to optimize your application and improve user experience.
- 🎉 **Styling Consistency:** Ensure a visually appealing interface with cohesive and responsive design elements.

---

## Project Structure

```sh
└── My-Spotify/
    ├── README.md
    ├── data
    │   ├── #ib_16384_0.dblwr
    │   ├── #ib_16384_1.dblwr
    │   ├── #innodb_redo
    │   ├── #innodb_temp
    │   ├── auto.cnf
    │   ├── binlog.000001
    │   ├── binlog.000002
    │   ├── binlog.index
    │   ├── ca-key.pem
    │   ├── ca.pem
    │   ├── client-cert.pem
    │   ├── client-key.pem
    │   ├── ib_buffer_pool
    │   ├── ibdata1
    │   ├── ibtmp1
    │   ├── mysql
    │   ├── mysql.ibd
    │   ├── mysql.sock
    │   ├── mysql_upgrade_history
    │   ├── performance_schema
    │   ├── private_key.pem
    │   ├── public_key.pem
    │   ├── server-cert.pem
    │   ├── server-key.pem
    │   ├── spotify
    │   ├── sys
    │   ├── undo_001
    │   └── undo_002
    ├── docker-compose.yml
    ├── my_spotify_db.sql
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.js
        ├── App.test.js
        ├── components
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        ├── setupTests.js
        └── styles
```

---

### Project Index

<details open>
	<summary><b><code>MY-SPOTIFY/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/my_spotify_db.sql'>my_spotify_db.sql</a></b></td>
					<td style='padding: 8px;'>- My_spotify_db.sql## SummaryThe <code>my_spotify_db.sql</code> file serves as a foundational component of the project, encapsulating the SQL schema and initial data for the <code>database_music</code> database<br>- This file is crucial for setting up the database environment required by the application, enabling it to manage and query music-related data effectively<br>- By providing a structured format for the database, it ensures that developers can easily replicate the database setup across different environments, facilitating collaboration and consistency within the codebase<br>- This SQL dump is particularly important for initializing the applications data layer, allowing the rest of the project to function seamlessly with the necessary data infrastructure in place.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the configuration and dependencies for a React application, ensuring a streamlined development process<br>- It specifies essential libraries for testing, routing, and performance monitoring, while also providing scripts for starting, building, and testing the app<br>- This setup facilitates a robust environment for building user interfaces, promoting best practices in code quality and compatibility across different browsers.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- README Summary for <code>package-lock.json</code>The <code>package-lock.json</code> file is a crucial component of the <code>my-app</code> project, serving as a comprehensive record of the exact versions of all dependencies and their sub-dependencies used in the application<br>- This file ensures that the development environment is consistent across different setups by locking the dependency tree, which helps prevent issues related to version mismatches.In the context of the overall project architecture, <code>package-lock.json</code> plays a vital role in maintaining the stability and reliability of the application<br>- It guarantees that every team member and deployment environment uses the same versions of libraries, which is essential for achieving predictable builds and minimizing bugs related to dependency updates.By managing dependencies effectively, this file supports the projects goal of delivering a robust and maintainable React application, leveraging libraries such as React Router for navigation and Testing Library for testing components<br>- Overall, <code>package-lock.json</code> is integral to the project's dependency management strategy, ensuring a seamless development experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/docker-compose.yml'>docker-compose.yml</a></b></td>
					<td style='padding: 8px;'>- Facilitates the deployment of a microservices architecture for a Spotify-like application by defining services for both the API and a MySQL database<br>- It ensures the API is accessible on port 8000 and establishes necessary environment configurations for database connectivity and initialization<br>- This setup streamlines development and testing, allowing for a cohesive integration of backend services.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/index.js'>index.js</a></b></td>
					<td style='padding: 8px;'>- Initializes the React application by rendering the main App component into the root DOM element<br>- It sets up the application in strict mode to help identify potential problems and includes functionality for measuring performance metrics<br>- This foundational setup ensures a smooth user experience and provides a structure for further development within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/App.js'>App.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates the core navigation and routing of the application, enabling users to seamlessly transition between various components such as artist details, albums, genres, and search functionalities<br>- By managing the application state for search terms, it enhances user interaction and experience, while integrating essential UI elements like the Navbar and Sidebar, thereby contributing to the overall structure and flow of the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/setupTests.js'>setupTests.js</a></b></td>
					<td style='padding: 8px;'>- Enhances testing capabilities by integrating custom matchers from jest-dom, which facilitate more intuitive assertions on DOM nodes within the project<br>- This setup streamlines the testing process, allowing developers to easily verify the presence and content of elements, thereby improving the overall reliability and maintainability of the codebase<br>- It plays a crucial role in ensuring high-quality user interface testing.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/App.test.js'>App.test.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates the testing of the main application component by ensuring that essential elements, such as the learn react link, are rendered correctly<br>- This contributes to the overall quality assurance of the project, promoting reliability and user experience<br>- By validating core functionalities, it supports the development process and helps maintain a robust codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/reportWebVitals.js'>reportWebVitals.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates performance monitoring by capturing key web vitals metrics such as Cumulative Layout Shift, First Input Delay, First Contentful Paint, Largest Contentful Paint, and Time to First Byte<br>- This functionality enhances the overall user experience by providing insights into application performance, enabling developers to make informed optimizations within the broader project architecture.</td>
				</tr>
			</table>
			<!-- styles Submodule -->
			<details>
				<summary><b>styles</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.styles</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Artiste.css'>Artiste.css</a></b></td>
							<td style='padding: 8px;'>- Defines the visual aesthetics for the Artiste component within the project, ensuring a cohesive and appealing user interface<br>- By establishing styles such as colors, fonts, and layout, it enhances the overall user experience and aligns with the projects branding<br>- This contributes to a polished and professional look, supporting the functionality of the application while maintaining design consistency across various components.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/ArtistDetails.css'>ArtistDetails.css</a></b></td>
							<td style='padding: 8px;'>- Styles for artist details enhance the visual presentation of artist profiles within the application<br>- By providing a cohesive layout and responsive design, these styles ensure that artist images, bios, and album information are displayed attractively and accessibly<br>- The design elements, such as hover effects and gradient highlights, contribute to an engaging user experience, making it easy for users to explore and appreciate the artists featured in the project.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Accueil.css'>Accueil.css</a></b></td>
							<td style='padding: 8px;'>- Stylesheet defines the visual presentation for the Accueil component of the project, establishing a cohesive and modern user interface<br>- It incorporates a dark theme with a flexible layout, featuring a sidebar for navigation and a main content area for displaying various sections<br>- The design enhances user interaction through responsive elements and hover effects, ensuring an engaging experience while browsing content, particularly for music-related features.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Genres.css'>Genres.css</a></b></td>
							<td style='padding: 8px;'>- Styles defined in Genres.css enhance the visual presentation of the genres section within the application<br>- By establishing a responsive grid layout for genre cards, it ensures an organized and appealing display<br>- The design elements, including hover effects and typography, contribute to an engaging user experience, aligning with the overall aesthetic and functionality of the project.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/index.css'>index.css</a></b></td>
							<td style='padding: 8px;'>- Establishes foundational styling for the project by defining global styles for the body and code elements<br>- It ensures a consistent and modern typography across the application, enhancing readability and user experience<br>- By utilizing system and widely supported fonts, it promotes a seamless visual appearance that aligns with the overall design architecture of the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Sidebar.css'>Sidebar.css</a></b></td>
							<td style='padding: 8px;'>- Defines the styling for the sidebar component within the application, establishing a fixed, visually appealing navigation area that enhances user experience<br>- It ensures the sidebar is user-friendly with clear typography and interactive elements, while also accommodating the main content layout to prevent overlap<br>- This design contributes to a cohesive and organized interface, facilitating easy access to navigation links and improving overall usability.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Recherche.css'>Recherche.css</a></b></td>
							<td style='padding: 8px;'>- Defines the visual styling and layout for the search interface within the application<br>- It establishes a cohesive dark theme with accent colors, ensuring a user-friendly experience through responsive design elements<br>- The styles enhance the search functionality by providing clear input fields, organized results, and engaging animations, contributing to an intuitive and aesthetically pleasing user interaction throughout the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/App.css'>App.css</a></b></td>
							<td style='padding: 8px;'>- Defines the styling for the main application interface, ensuring a visually appealing and user-friendly experience<br>- It establishes layout properties, animations, and responsive design elements that enhance the overall aesthetic and functionality of the application<br>- By centralizing styles, it contributes to a cohesive look and feel, aligning with the projects goal of delivering an engaging user experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Albums.css'>Albums.css</a></b></td>
							<td style='padding: 8px;'>- Styles for pagination and content layout enhance user interaction and visual appeal within the application<br>- By defining button aesthetics and behaviors, such as hover effects and active states, the design promotes a seamless navigation experience<br>- Additionally, the content styling ensures a consistent and user-friendly interface, contributing to the overall architectures focus on usability and accessibility.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/Navbar.css'>Navbar.css</a></b></td>
							<td style='padding: 8px;'>- Defines the styling for the navigation bar, establishing a fixed position at the top of the interface to ensure constant visibility<br>- It enhances user experience through a visually appealing design, featuring a dark theme with contrasting colors for text and elements<br>- The layout facilitates easy access to branding and search functionalities, contributing to the overall usability and aesthetic coherence of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/styles/DetailsAlbum.css'>DetailsAlbum.css</a></b></td>
							<td style='padding: 8px;'>- Styles for the album details page enhance the visual presentation and user experience of the music application<br>- By defining layouts, typography, and interactive elements, these styles create an engaging interface for displaying album information and track listings<br>- The design promotes a cohesive aesthetic that aligns with the overall project architecture, ensuring a seamless interaction for users exploring music content.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Recherche.jsx'>Recherche.jsx</a></b></td>
							<td style='padding: 8px;'>- Search component facilitates user interaction by allowing searches for albums and artists within the application<br>- It fetches data from a backend service, enriches it with relevant details, and displays filtered results based on user input<br>- Additionally, it manages pagination for results, ensuring a smooth user experience while handling loading states and potential errors effectively<br>- This component plays a crucial role in enhancing the overall functionality of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/DetailsArtiste.jsx'>DetailsArtiste.jsx</a></b></td>
							<td style='padding: 8px;'>- ArtistDetails component serves to display detailed information about a specific artist, including their biography and associated albums<br>- It fetches artist data and album listings based on the artists unique identifier, handling loading states and potential errors gracefully<br>- By providing a user-friendly interface, it enhances the overall experience of exploring artist profiles within the application, contributing to the projects goal of showcasing musical talent.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
							<td style='padding: 8px;'>- Navbar component serves as a key navigational element within the MySpotify application, providing users with a seamless way to access the home page and search for artists<br>- By integrating a search bar, it enhances user interaction, allowing for real-time search functionality<br>- This component plays a crucial role in maintaining an intuitive user experience across the overall project architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/DetailsAlbum.jsx'>DetailsAlbum.jsx</a></b></td>
							<td style='padding: 8px;'>- DetailsAlbum component serves to display detailed information about a specific album, including its cover, description, and tracklist<br>- It fetches album data based on the album ID from the URL, handles loading states and errors, and provides an audio player for tracks, allowing users to play or pause individual songs<br>- This enhances the user experience by integrating album exploration with audio playback functionality.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Genres.jsx'>Genres.jsx</a></b></td>
							<td style='padding: 8px;'>- Genres component serves as a dynamic interface for displaying a list of genres fetched from a backend service<br>- It manages the loading state and potential errors while allowing users to navigate to detailed views of each genre<br>- By integrating with the overall project architecture, it enhances user engagement and provides a seamless experience in exploring various genres within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/accueil.jsx'>accueil.jsx</a></b></td>
							<td style='padding: 8px;'>- Accueil component serves as the main landing page for the MusiFlow application, showcasing featured artists, popular albums, and music genres<br>- It dynamically fetches and displays content based on user interactions, such as search terms, while managing loading states and potential errors<br>- The component enhances user engagement by allowing navigation to detailed views of artists, albums, and genres, creating an interactive and visually appealing experience.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/DetailsGenre.jsx'>DetailsGenre.jsx</a></b></td>
							<td style='padding: 8px;'>- DetailsGenre component serves to display information about a specific music genre, including its name and associated albums<br>- It fetches genre data and album details from an API, manages loading states, and handles errors<br>- Additionally, it implements pagination for album display, enhancing user navigation through the albums related to the selected genre, thereby enriching the overall user experience within the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Sidebar.jsx'>Sidebar.jsx</a></b></td>
							<td style='padding: 8px;'>- Provides a navigational component for the Spotify Clone project, enhancing user experience by facilitating easy access to key sections such as Home, Albums, Genres, Artists, and Search<br>- The Sidebar serves as a central hub within the application, promoting seamless navigation and organization, which is essential for users to explore the music content effectively<br>- Its integration into the overall architecture supports a cohesive and intuitive interface.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Album.jsx'>Album.jsx</a></b></td>
							<td style='padding: 8px;'>- Albums component serves as a user interface for displaying a paginated list of music albums<br>- It fetches album data from a backend service, handles loading states and errors, and allows users to navigate to detailed views of individual albums<br>- The component enhances user experience through pagination, ensuring efficient browsing of potentially large album collections while maintaining a clean and responsive design.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/src/components/Artistes.jsx'>Artistes.jsx</a></b></td>
							<td style='padding: 8px;'>- Artiste component serves as a dynamic interface for displaying a paginated list of artists retrieved from a backend API<br>- It manages the state of artist data, handles errors, and facilitates navigation to detailed artist views<br>- By implementing pagination, it enhances user experience, allowing seamless browsing through a potentially large dataset while maintaining clarity and accessibility within the overall project architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- public Submodule -->
	<details>
		<summary><b>public</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ public</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/public/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serves as the foundational HTML template for the web application, establishing the structure and essential metadata for a React-based project<br>- It facilitates the integration of various assets, such as icons and manifests, while ensuring compatibility with client-side routing<br>- This template is crucial for rendering the React components and provides a seamless user experience across different devices.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/public/manifest.json'>manifest.json</a></b></td>
					<td style='padding: 8px;'>- Defines the web apps manifest, providing essential metadata for a Progressive Web App (PWA)<br>- It specifies the apps name, icons, and display settings, ensuring a seamless user experience when installed on devices<br>- By establishing the theme and background colors, it enhances visual consistency, contributing to the overall branding and usability of the Create React App Sample project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Mavrokai/My-Spotify/blob/master/public/robots.txt'>robots.txt</a></b></td>
					<td style='padding: 8px;'>- Facilitates web crawling by providing directives for search engine bots<br>- The robots.txt located in the public directory allows all user agents unrestricted access to the site, ensuring that search engines can index the content effectively<br>- This contributes to the overall architecture by enhancing visibility and discoverability of the project on the web.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** CSS
- **Package Manager:** Npm
- **Container Runtime:** Docker

### Installation

Build My-Spotify from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Mavrokai/My-Spotify
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd My-Spotify
    ```

3. **Install the dependencies:**

**Using [docker](https://www.docker.com/):**

```sh
❯ docker build -t Mavrokai/My-Spotify .
```
**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [docker](https://www.docker.com/):**

```sh
docker run -it {image_name}
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

My-spotify uses the {__test_framework__} test framework. Run the test suite with:

**Using [docker](https://www.docker.com/):**

```sh
echo 'INSERT-TEST-COMMAND-HERE'
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
