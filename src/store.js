import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import notifyReducer from '../src/reducers/notifyReducer';

// firebase config data
const firebaseConfig = {
	apiKey: 'AIzaSyBDUdgCAgh-JvfVsbe5rMDDh_wCp94OMzk',
	authDomain: 'jensklemetscom.firebaseapp.com',
	databaseURL: 'https://jensklemetscom.firebaseio.com',
	projectId: 'jensklemetscom',
	storageBucket: 'jensklemetscom.appspot.com',
	messagingSenderId: '832433302864'
};

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true
};

// init firebase inst
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
	reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	notify: notifyReducer
});

// Create store with reducers and initial state
const initialState = {};

const store = createStoreWithFirebase(
	rootReducer,
	initialState,
	compose(
		reactReduxFirebase(firebase)
		// window.__REDUX_DEVTOOLS_EXTENSION__ &&
		// 	window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
