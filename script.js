// action types
const ADD = 'score/add';
const REMOVE = 'score/remove';
const INCREMENT = 'score/increment';
const DECREMENT = 'score/decrement';
const RESET = 'score/reset';

// initial state
const initialState = [{ id: 1, score: 0 }];

// create reducer function
function scoreReducer(state = initialState, action) {
	// action.type is the action that we dispatch
	switch (action.type) {
		case ADD:
			return [...state, { id: state.length + 1, score: 0 }];

		// filter out the match with the id that we want to remove
		case REMOVE:
			return state.filter((match) => match.id !== action.payload.id);

		// increment the score by the value that we pass in
		case INCREMENT:
			return state.map((match) => {
				if (match.id === action.payload.id) {
					return {
						...match,
						score: match.score + action.payload.value,
					};
				} else {
					return match;
				}
			});

		// decrement the score by the value that we pass in
		case DECREMENT:
			return state.map((match) => {
				if (match.id === action.payload.id) {
					return {
						...match,
						score: match.score >= action.payload.value ? match.score - action.payload.value : 0,
					};
				} else {
					return match;
				}
			});

		// reset the score to 0
		case RESET:
			return state.map((match) => {
				return {
					...match,
					score: 0,
				};
			});

		// return the state if no action is passed
		default:
			return state;
	}
}

// create store
const store = Redux.createStore(scoreReducer);

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

			// dispatch action
			store.dispatch({
				type: INCREMENT,
				payload: { id, value },
			});
		});
	});

	// decrement form event listener
	decrementForm.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const id = parseInt(e.target.elements.decrement.dataset.id);
			const value = parseInt(e.target.elements.decrement.value);

			// dispatch action
			store.dispatch({
				type: DECREMENT,
				payload: { id, value },
			});
		});
	});

	// delete match event listener
	lwsDeletes.forEach((deleteBtn) => {
		deleteBtn.addEventListener('click', () => {
			const id = parseInt(deleteBtn.dataset.id);
			// dispatch action
			store.dispatch({
				type: REMOVE,
				payload: { id },
			});
		});
	});
}

// select dom matches container
const allMatches = document.querySelector('.all-matches');

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
                            <input type="number" name="decrement" class="lws-decrement" data-id="${match.id}" />
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

// event listener to add match button
const lwsAddMatch = document.querySelector('.lws-addMatch');
lwsAddMatch.addEventListener('click', () => {
	// dispatch action
	store.dispatch({ type: ADD });
});

// event listener to reset button
const lwsReset = document.querySelector('.lws-reset');
lwsReset.addEventListener('click', () => {
	// dispatch action
	store.dispatch({ type: RESET });
});
