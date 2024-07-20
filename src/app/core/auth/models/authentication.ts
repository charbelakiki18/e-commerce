export interface SignInRequest{
    Username: string;
    Password: string;
}

export interface SignInResponse{
    AccessToken:      string;
    ExpiresIn:        number;
    RefreshExpiresIn: number;
    RefreshToken:     string;
    TokenType:        string;
    NotBeforePolicy:  number;
    SessionState:     string;
    Scope:            string;
}

export interface SignUpRequest{
    Firstname: string;
    Lastname:  string;
    Email:     string;
    Password:  string;
    RoleName:  string;
}

export interface SignUpResponse{
    id:                         string;
    createdTimestamp:           number;
    username:                   string;
    enabled:                    boolean;
    totp:                       boolean;
    emailVerified:              boolean;
    firstName:                  string;
    lastName:                   string;
    email:                      string;
    disableableCredentialTypes: any[];
    requiredActions:            any[];
    notBefore:                  number;
    access:                     Access;
    attributes:                 null;
}

export interface Access {
    manageGroupMembership: boolean;
    view:                  boolean;
    mapRoles:              boolean;
    impersonate:           boolean;
    manage:                boolean;
}
