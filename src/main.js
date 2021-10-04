import DataTableEmptyWrapper from './components/DataTableEmptyWrapper';
import DataTablePaginator from './components/DataTablePaginator';
import AlertReload from './components/AlertReload';
import MainFilter from './components/MainFilter';
import Loader from './components/Loader';
import FilePicker from './components/FilePicker';
import Tabs from './components/Tabs';
import DialogHeader from './components/DialogHeader';
import DialogFooter from './components/DialogFooter';
import DefaultTextField from './components/DefaultTextField';
import RangeDatePicker from './components/RangeDatePicker';
import DatePicker from './components/DatePicker';
import ManagersList from './components/ManagersList';
import PromptUserToConfirm from './components/PromptUserToConfirm';

import currency from './helpers/currency';
import toClipboard from './helpers/to-clipboard';
import percentage from './helpers/percentage';
import axiosWrapper from './helpers/axios-wrapper';

import routeRole from './mixins/routeRole';

import userAccessStore from './stores/userAccess';

import ExportButton from './components/Buttons/Export';
import ImportButton from './components/Buttons/Import';
import ToggleButton from './components/Buttons/Toggle';
import RemoveButton from './components/Buttons/Remove';

const mixins = {
	routeRole,
};

const stores = {
	userAccess: userAccessStore,
};

export {
	DataTableEmptyWrapper,
	DataTablePaginator,
	MainFilter,
	Loader,
	FilePicker,
	Tabs,
	DialogHeader,
	DialogFooter,
	ExportButton,
	ImportButton,
	ToggleButton,
	RemoveButton,
	AlertReload,
	DefaultTextField,
	RangeDatePicker,
	DatePicker,
	ManagersList,
	PromptUserToConfirm,
	currency,
	toClipboard,
	percentage,
	axiosWrapper,
	mixins,
	stores,
};
