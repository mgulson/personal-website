import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type Eagerlanguage = {
  readonly id?: number | null;
  readonly name?: string | null;
}

type Lazylanguage = {
  readonly id?: number | null;
  readonly name?: string | null;
}

export declare type language = LazyLoading extends LazyLoadingDisabled ? Eagerlanguage : Lazylanguage

export declare const language: (new (init: ModelInit<language>) => language)

type EagerlanguageConnection = {
  readonly items?: (language | null)[] | null;
  readonly nextToken?: string | null;
}

type LazylanguageConnection = {
  readonly items?: (language | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type languageConnection = LazyLoading extends LazyLoadingDisabled ? EagerlanguageConnection : LazylanguageConnection

export declare const languageConnection: (new (init: ModelInit<languageConnection>) => languageConnection)

