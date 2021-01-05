const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			peopleCats: {},
			people: [],
			planetCats: {},
			planets: [],
			favorites: [],
			filterToggle: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadInitialData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */

				fetch("https://www.swapi.tech/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						setStore({
							peopleCats: jsonifiedResponse,
							people: jsonifiedResponse.results
						});
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});

				fetch("https://www.swapi.tech/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
							console.log("error after response");
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						setStore({
							planetCats: jsonifiedResponse,
							planets: jsonifiedResponse.results
						});
					})

					.catch(function(error) {
						console.log("ya broke it", error);
					});
			},
			addFavorite: uid => {
				const store = getStore();
				if (!store.favorites.includes(uid)) {
					let favs = [];
					favs = store.favorites.concat(uid);
					setStore({ favorites: favs });
				}
			},
			favFilter: () => {
				const store = getStore();
				if (!store.filterToggle) {
					let favs = [];
					favs = store.favorites.concat(uid);
					setStore({ favorites: favs });
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
