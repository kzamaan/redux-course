// select dom matches container
const allMatches = document.querySelector('.all-matches');

// initial state
const initialState = [{ id: 1, score: 0 }];

// create reducer function
function scoreReducer(state = initialState, action) {
	if (action.type === 'increment') {
		const updatedScore = state.map((match) => {
			if (match.id === action.payload.id) {
				return {
					...match,
					score: match.score + action.payload.value,
				};
			} else {
				return match;
			}
		});
		return updatedScore;
	} else if (action.type === 'decrement') {
		const updatedScore = state.map((match) => {
			if (match.id === action.payload.id) {
				return {
					...match,
					score: match.score >= action.payload.value ? match.score - action.payload.value : 0,
				};
			} else {
				return match;
			}
		});
		return updatedScore;
	} else if (action.type === 'addMatch') {
		return [...state, { id: state.length + 1, score: 0 }];
	} else if (action.type === 'removeMatch') {
		return state.filter((match) => match.id !== action.payload.id);
	} else if (action.type === 'reset') {
		return state.map((match) => {
			return {
				...match,
				score: 0,
			};
		});
	} else {
		return state;
	}
}

// create store
const store = Redux.createStore(scoreReducer);

// create render function
const render = () => {
	const state = store.getState();
	const matchesDOM = state
		.map((match, index) => {
			return `
                <div class="match">
                    <div class="wrapper">
                        <button class="lws-delete" data-id="${match.id}">
                            <img src="./image/delete.svg" alt="remove" />
                        </button>
                        <h3 class="lws-matchName">Match ${index + 1}</h3>
                    </div>
                    <div class="inc-dec">
                        <form class="incrementForm">
                            <h4>Increment</h4>
                            <input type="number" name="increment" class="lws-increment" data-id="${match.id}" />
                        </form>
                        <form class="decrementForm">
                            <h4>Decrement</h4>
                            <input type="number" name="decrement" class="lws-decrement" data-id="${match.id}"/>
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 class="lws-singleResult">${match.score}</h2>
                    </div>
                </div>
            `;
		})
		.join('');

	allMatches.innerHTML = matchesDOM;
	addEventListenerToElements();
};

// update UI initially
render();

// subscribe to store
store.subscribe(render);

// event listener to increment and decrement score
function addEventListenerToElements() {
	const incrementForm = document.querySelectorAll('.incrementForm');
	const decrementForm = document.querySelectorAll('.decrementForm');
	const lwsDeletes = document.querySelectorAll('.lws-delete');

	// increment form event listener
	incrementForm.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const id = parseInt(e.target.elements.increment.dataset.id);
			const value = parseInt(e.target.elements.increment.value);
			console.log('increment', id, value);
			store.dispatch({
				type: 'increment',
				payload: {
					id,
					value,
				},
			});
		});
	});

	// decrement form event listener
	decrementForm.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const id = parseInt(e.target.elements.decrement.dataset.id);
			const value = parseInt(e.target.elements.decrement.value);
			console.log('decrement', id, value);
			store.dispatch({
				type: 'decrement',
				payload: {
					id,
					value,
				},
			});
		});
	});

	// delete match event listener
	lwsDeletes.forEach((deleteBtn) => {
		deleteBtn.addEventListener('click', (e) => {
			console.log(deleteBtn);
			const id = parseInt(deleteBtn.dataset.id);
			console.log('delete', id);

			store.dispatch({
				type: 'removeMatch',
				payload: { id },
			});
		});
	});
}

// event listener to add match button
const lwsAddMatch = document.querySelector('.lws-addMatch');
lwsAddMatch.addEventListener('click', () => {
	store.dispatch({ type: 'addMatch' });
});

// event listener to reset button
const lwsReset = document.querySelector('.lws-reset');
lwsReset.addEventListener('click', () => {
	store.dispatch({ type: 'reset' });
});
