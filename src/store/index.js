import { observable } from 'mobx';
import TimeperiodStore from './TimeperiodStore';
import ChartStore from './ChartStore';
import ChartTypeStore from './ChartTypeStore';
import StudyLegendStore from './StudyLegendStore';
import ComparisonStore from './ComparisonStore';
import DrawToolsStore from './DrawToolsStore';
import ChartTitleStore from './ChartTitleStore';
import AssetInformationStore from './AssetInformationStore';
import ComparisonListStore from './ComparisonListStore';
import NotificationStore from './NotificationStore';
import DoorbellStore from './DoorbellStore';
import CrosshairStore from './CrosshairStore';

export default class MainStore {
    @observable chart = new ChartStore(this);
    @observable chartType = new ChartTypeStore(this);
    @observable studies = new StudyLegendStore(this);
    @observable comparison = new ComparisonStore(this);
    @observable drawTools = new DrawToolsStore(this);
    @observable chartTitle = new ChartTitleStore(this);
    @observable timeperiod = new TimeperiodStore(this);
    @observable assetInformation = new AssetInformationStore(this);
    @observable comparisonList = new ComparisonListStore(this);
    @observable notification = new NotificationStore(this);
    @observable doorbell = new DoorbellStore();
    @observable crosshair = new CrosshairStore(this);
}
