/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { App } from "./src/App";
import {name as appName} from './app.json';
import { SignIn } from './src/views/Authorization/SignIn';

AppRegistry.registerComponent(appName, () => SignIn);