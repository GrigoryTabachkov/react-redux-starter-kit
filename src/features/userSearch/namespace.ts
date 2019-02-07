import { IUser, IDetailedUser, IUserSearchResults } from 'shared/types/models';
import { IPaginationState } from 'shared/types/common';
import { IUserSearchOptions } from 'shared/types/github';
import { ICommunication, IPlainFailAction, IAction, IPlainAction } from 'shared/types/redux';

export interface IReduxState {
  data: {
    foundUsers: IUser[] | null;
    userDetails: IDetailedUser | null;
  };
  communication: {
    searchUser: ICommunication;
    loadUserDetails: ICommunication;
  };
  ui: {
    userSearchPaginationState: IPaginationState | null;
  };
}

export interface IUserSearchFormFields extends IUserSearchOptions {
  searchString: string;
}

export interface ISearchUserPayload extends IUserSearchFormFields {
  page: number;
}

export interface IUserSearchSuccessPayload extends IUserSearchResults {
  page: number;
}

export type IResetUserDetails = IPlainAction<'GITHUB_SEARCH:RESET_USER_DETAILS'>;

export type ISearchUser = IAction<'GITHUB_SEARCH:SEARCH_USER', ISearchUserPayload>;
export type ISearchUserSuccess = IAction<'GITHUB_SEARCH:SEARCH_USER_SUCCESS', IUserSearchSuccessPayload>;
export type ISearchUserFail = IPlainFailAction<'GITHUB_SEARCH:SEARCH_USER_FAIL'>;

export type ILoadUserDetails = IAction<'GITHUB_SEARCH:LOAD_USER_DETAILS', string>;
export type ILoadUserDetailsSuccess = IAction<'GITHUB_SEARCH:LOAD_USER_DETAILS_SUCCESS', IDetailedUser>;
export type ILoadUserDetailsFail = IPlainFailAction<'GITHUB_SEARCH:LOAD_USER_DETAILS_FAIL'>;

export type IAction = IResetUserDetails | ISearchUser | ISearchUserSuccess | ISearchUserFail | ILoadUserDetails
| ILoadUserDetailsFail | ILoadUserDetailsSuccess;