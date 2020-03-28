import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CreateTodoMutationResponse = MutationResponse & {
   __typename?: 'CreateTodoMutationResponse';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  todo?: Maybe<Todo>;
};


export type Mutation = {
   __typename?: 'Mutation';
  addTodo?: Maybe<CreateTodoMutationResponse>;
};


export type MutationAddTodoArgs = {
  todo: NewTodo;
};

export type MutationResponse = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type NewTodo = {
  /** Title of the new ToDo */
  title: Scalars['String'];
  /** Optional argument whether todo is already completed */
  completed?: Maybe<Scalars['Boolean']>;
};

export type Query = {
   __typename?: 'Query';
  todos: TodoConnection;
  hasMore?: Maybe<Scalars['Boolean']>;
};


export type QueryTodosArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  todoAdded?: Maybe<Todo>;
};

export type Todo = {
   __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  created: Scalars['Date'];
  completed: Scalars['Boolean'];
};

export type TodoConnection = {
   __typename?: 'TodoConnection';
  cursor: Scalars['Int'];
  hasMore: Scalars['Boolean'];
  items: Array<Todo>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  TodoConnection: ResolverTypeWrapper<TodoConnection>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Todo: ResolverTypeWrapper<Todo>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Mutation: ResolverTypeWrapper<{}>,
  NewTodo: NewTodo,
  CreateTodoMutationResponse: ResolverTypeWrapper<CreateTodoMutationResponse>,
  MutationResponse: ResolversTypes['CreateTodoMutationResponse'],
  Subscription: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Int: Scalars['Int'],
  TodoConnection: TodoConnection,
  Boolean: Scalars['Boolean'],
  Todo: Todo,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Date: Scalars['Date'],
  Mutation: {},
  NewTodo: NewTodo,
  CreateTodoMutationResponse: CreateTodoMutationResponse,
  MutationResponse: ResolversParentTypes['CreateTodoMutationResponse'],
  Subscription: {},
};

export type CreateTodoMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTodoMutationResponse'] = ResolversParentTypes['CreateTodoMutationResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<Maybe<ResolversTypes['CreateTodoMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'todo'>>,
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'CreateTodoMutationResponse', ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todos?: Resolver<ResolversTypes['TodoConnection'], ParentType, ContextType, RequireFields<QueryTodosArgs, never>>,
  hasMore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  todoAdded?: SubscriptionResolver<Maybe<ResolversTypes['Todo']>, "todoAdded", ParentType, ContextType>,
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoConnection'] = ResolversParentTypes['TodoConnection']> = {
  cursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  items?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  CreateTodoMutationResponse?: CreateTodoMutationResponseResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  MutationResponse?: MutationResponseResolvers,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  TodoConnection?: TodoConnectionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
