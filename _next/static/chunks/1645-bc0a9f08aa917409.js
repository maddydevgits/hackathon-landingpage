"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1645], {
        30819: function(n, e, r) {
            r.d(e, {
                EM: function() {
                    return cn
                },
                En: function() {
                    return F
                },
                G9: function() {
                    return K
                },
                H: function() {
                    return sn
                },
                IP: function() {
                    return H
                },
                Iv: function() {
                    return J
                },
                N$: function() {
                    return hn
                },
                Pq: function() {
                    return nn
                },
                Rh: function() {
                    return k
                },
                Uv: function() {
                    return Q
                },
                Vu: function() {
                    return gn
                },
                WA: function() {
                    return on
                },
                Wm: function() {
                    return un
                },
                Zo: function() {
                    return en
                },
                _l: function() {
                    return W
                },
                cU: function() {
                    return an
                },
                di: function() {
                    return ln
                },
                gk: function() {
                    return M
                },
                hc: function() {
                    return O
                },
                lE: function() {
                    return x
                },
                mu: function() {
                    return rn
                },
                n4: function() {
                    return Y
                },
                nL: function() {
                    return j
                },
                ow: function() {
                    return V
                },
                qG: function() {
                    return tn
                },
                rf: function() {
                    return X
                },
                tJ: function() {
                    return Z
                },
                zP: function() {
                    return dn
                }
            });
            var t = r(7297),
                i = r(31230);

            function a() {
                var n = (0, t.Z)(["\n  query ALL_CHALLENGES_QUERY(\n    $sortBy: ChallengeOrderByWithRelationInput\n    $searchTerm: String\n    $page: Int\n    $industries: [String!]\n  ) {\n    challenges(\n      where: {\n        publishInfo: { state: { equals: ACTIVE } }\n        OR: [\n          { name: { contains: $searchTerm, mode: insensitive } }\n          { slug: { contains: $searchTerm, mode: insensitive } }\n          { organization: { name: { contains: $searchTerm, mode: insensitive } } }\n        ]\n        industries: { some: { title: { in: $industries } } }\n      }\n      page: $page\n      orderBy: $sortBy\n    ) {\n      id\n      name\n      isClosed\n      shortDescription\n      logoImageFile {\n        id\n        url\n      }\n      cardImageFile {\n        id\n        url\n      }\n      prize\n      prizeDecimals\n      prizeCurrency {\n        id\n        name\n      }\n      organization {\n        id\n        name\n        slug\n      }\n      steps {\n        id\n        startDate\n      }\n      currentStep {\n        id\n        name\n        startDate\n      }\n      industries {\n        id\n        title\n        title_br\n        title_es\n        title_fr\n      }\n      slug\n      allowedParticipants\n      participantsCount\n      projectMembersCount\n      projectsCount\n      order\n      isPublic\n      publishInfo {\n        id\n        draftToken\n        state\n      }\n    }\n  }\n"]);
                return a = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, t.Z)(["\n  query CHALLENGES_PAGE_INFO_QUERY(\n    $whereInput: ChallengeWhereInput\n    $orderBy: ChallengeOrderByWithRelationInput!\n  ) {\n    challengesPageInfo(where: $whereInput, orderBy: $orderBy) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return u = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, t.Z)(["\n  query ALL_CHALLENGES_PAGE_INFO_QUERY(\n    $sortBy: ChallengeOrderByWithRelationInput!\n    $searchTerm: String\n    $industries: [String!]\n  ) {\n    challengesPageInfo(\n      orderBy: $sortBy\n      where: {\n        publishInfo: { state: { equals: ACTIVE } }\n        OR: [\n          { name: { contains: $searchTerm, mode: insensitive } }\n          { slug: { contains: $searchTerm, mode: insensitive } }\n          { organization: { name: { contains: $searchTerm, mode: insensitive } } }\n        ]\n        industries: { some: { title: { in: $industries } } }\n      }\n    ) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }

            function o() {
                var n = (0, t.Z)(["\n  query USER_CHALLENGES_QUERY(\n    $username: String!\n    $orderBy: ChallengeOrderByWithRelationInput!\n    $page: Int\n    $perPage: Int\n  ) {\n    challenges(\n      orderBy: $orderBy\n      where: {\n        OR: [\n          { steps: { some: { juries: { some: { user: { username: { equals: $username } } } } } } }\n          {\n            allowedParticipants: { in: [CROWD, SELECTED] }\n            participants: { some: { user: { username: { equals: $username } } } }\n          }\n          { mentors: { some: { user: { username: { equals: $username } } } } }\n        ]\n      }\n      page: $page\n      perPage: $perPage\n    ) {\n      id\n      slug\n      name\n      isClosed\n      logoImageFile {\n        id\n        url\n      }\n      cardImageFile {\n        id\n        url\n      }\n      organization {\n        id\n        slug\n        name\n      }\n      steps {\n        id\n        startDate\n      }\n      currentStep {\n        id\n        name\n\n        projectVisibility\n        startDate\n        challenge {\n          id\n          organization {\n            id\n          }\n        }\n      }\n      industries {\n        id\n        title\n        title_br\n        title_es\n        title_fr\n      }\n      projects {\n        id\n      }\n      prize\n      prizeDecimals\n      prizeCurrency {\n        id\n        name\n      }\n      shortDescription\n      allowedParticipants\n      participantsCount\n      projectMembersCount\n      projectsCount\n      publishInfo {\n        id\n        draftToken\n        state\n      }\n      order\n      isPublic\n    }\n  }\n"]);
                return o = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, t.Z)(["\n  query USER_CHALLENGES_PAGE_INFO_QUERY(\n    $orderBy: ChallengeOrderByWithRelationInput!\n    $username: String!\n    $perPage: Int\n  ) {\n    challengesPageInfo(\n      orderBy: $orderBy\n      where: {\n        OR: [\n          { steps: { some: { juries: { some: { user: { username: { equals: $username } } } } } } }\n          {\n            allowedParticipants: { in: [CROWD, SELECTED] }\n            participants: { some: { user: { username: { equals: $username } } } }\n          }\n          {\n            steps: { some: { votingScheme: { in: [ORGANIZATION_AND_SELECTED] } } }\n            organization: { users: { some: { user: { username: { equals: $username } } } } }\n          }\n        ]\n      }\n      perPage: $perPage\n    ) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, t.Z)(["\n  mutation MARK_CHALLENGE_UPDATES($challengeId: ID!) {\n    markChallengeUpdateRead(challengeId: $challengeId) {\n      message\n    }\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, t.Z)(["\n  query CHALLENGE_UPDATES_QUERY($challengeId: String!) {\n    challengeUpdates(where: { challenge: { id: { equals: $challengeId } } }) {\n      id\n      title\n      content\n      publishedAt\n      tags\n      isRead\n      challenge {\n        participants {\n          id\n          user {\n            id\n            username\n            fullName\n          }\n        }\n      }\n    }\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, t.Z)(["\n  query CHALLENGE_INFO_LEADERBOARD_QUERY($challenge: String!) {\n    challenges(where: { slug: { equals: $challenge } }) {\n      id\n      name\n      coverImageFile {\n        id\n        url\n      }\n    }\n  }\n"]);
                return d = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, t.Z)(["\n  ", "\n"]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, t.Z)(["\n  query CHALLENGE_BACKING_RESULTS($whereInput: ChallengeBalanceTableWhereInput) {\n    challengeBalanceTables(where: $whereInput, orderBy: { position: asc }) {\n      id\n      challenge {\n        id\n        name\n        slug\n        organization {\n          id\n          slug\n        }\n      }\n      project {\n        id\n        name\n        logoImageFile {\n          id\n          url\n        }\n        challenge {\n          id\n          slug\n          organization {\n            id\n            slug\n          }\n        }\n      }\n      finalBalance\n      position\n    }\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, t.Z)(["\n  query CHALLENGE_DIVIDENDS_QUERY($challengeId: ID!, $page: Int, $perPage: Int) {\n    challengeDividends(challengeId: $challengeId, page: $page, perPage: $perPage) {\n      id\n      type\n      accountingBalance\n      balance\n      project {\n        id\n        name\n        logoImageFile {\n          id\n          url\n        }\n        challenge {\n          id\n          slug\n          organization {\n            id\n            slug\n          }\n        }\n      }\n      user {\n        id\n        username\n        fullName\n        photoImageFile {\n          id\n          url\n        }\n      }\n    }\n  }\n"]);
                return f = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, t.Z)(["\n  query CHALLENGE_DIVIDENDS_PAGE_INFO_QUERY($challengeId: ID!, $perPage: Int) {\n    challengeDividendsPageInfo(challengeId: $challengeId, perPage: $perPage) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, t.Z)(["\n  query CHALLENGE_PARTICIPANT_PROJECTS_QUERY($challengeId: String, $userId: String) {\n    projects(\n      where: {\n        challenge: { id: { equals: $challengeId } }\n        members: { some: { user: { id: { equals: $userId } } } }\n        state: { in: [ACTIVE, DRAFT] }\n      }\n    ) {\n      id\n      name\n    }\n  }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, t.Z)(["\n  query CHALLENGE_PARTICIPANT_QUERY($challengeId: String!, $userId: String!) {\n    participants(\n      where: { challenge: { id: { equals: $challengeId } }, user: { id: { equals: $userId } } }\n    ) {\n      id\n      isAvailableToHire\n      tags\n      user {\n        id\n        username\n        fullName\n      }\n      challenge {\n        id\n        projects(where: { members: { some: { user: { id: { equals: $userId } } } } }) {\n          id\n          name\n          members {\n            user {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);
                return E = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, t.Z)(["\n  query CHALLENGE_PARTICIPANTS_QUERY(\n    $challengeId: String!\n    $whereInput: ParticipantWhereInput\n    $page: Int\n  ) {\n    participants(where: $whereInput, page: $page) {\n      id\n      state\n      user {\n        id\n        username\n        fullName\n        photoImageFile {\n          id\n          url\n        }\n        projectMembers(\n          where: {\n            project: { state: { notIn: [DRAFT, NOT_ELIGIBLE_DRAFT, DELETED] } }\n            challengeId: { equals: $challengeId }\n          }\n        ) {\n          id\n          project {\n            id\n            name\n          }\n        }\n        skills(first: 4) {\n          id\n          title\n          title_br\n          title_es\n          title_fr\n        }\n      }\n      tags\n      isAvailableToHire\n      canBeHired\n    }\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }

            function $() {
                var n = (0, t.Z)(["\n  query CHALLENGE_PARTICIPANTS_PAGE_INFO_QUERY($whereInput: ParticipantWhereInput) {\n    participantsPageInfo(where: $whereInput) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return $ = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, t.Z)(["\n  query CHALLENGE_JURY($challengeId: String, $where: JuryWhereInput, $page: Int) {\n    juries(where: $where, page: $page) {\n      id\n      guestUser {\n        id\n        nickname\n        wallets(where: { challenge: { id: { equals: $challengeId } } }) {\n          id\n          balance\n          type\n          challenge {\n            id\n            name\n          }\n        }\n      }\n      user {\n        id\n        username\n        fullName\n        photoImageFile {\n          id\n          url\n        }\n        wallets(where: { challenge: { id: { equals: $challengeId } } }) {\n          id\n          balance\n          type\n          challenge {\n            id\n            name\n          }\n        }\n      }\n      challengeCategories {\n        name\n        id\n      }\n    }\n  }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, t.Z)(["\n  query CHALLENGE_JURY_PAGE_INFO_QUERY($where: JuryWhereInput) {\n    juriesPageInfo(where: $where) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, t.Z)(["\n  query CHALLENGE_AUTHORIZATIONS_GENERIC_PARTICIPANT_QUERY($userId: String!, $challengeId: ID!) {\n    challenge(id: $challengeId) {\n      id\n      name\n      mentors(where: { user: { id: { equals: $userId } } }) {\n        id\n        hasSubmittedFeedback\n      }\n      participants(where: { state: { equals: APPROVED }, user: { id: { equals: $userId } } }) {\n        id\n        hasSubmittedFeedback\n      }\n      juries(\n        where: {\n          OR: [{ user: { id: { equals: $userId } } }, { guestUser: { id: { equals: $userId } } }]\n        }\n      ) {\n        id\n        hasSubmittedFeedback\n      }\n      id\n    }\n  }\n"]);
                return A = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, t.Z)(["\n  query CHALLENGE_AUTHORIZATIONS_QUERY($challengeId: ID!) {\n    challengeAuthorizations(challengeId: $challengeId) {\n      name\n      isAuthorized\n    }\n  }\n"]);
                return y = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, t.Z)(["\n  query CHALLENGE_STEPS_QUERY($organizationSlug: String!, $challengeSlug: String!, $token: String) {\n    challengeBySlug(\n      organizationSlug: $organizationSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      steps(orderBy: { startDate: asc }) {\n        id\n        name\n        votingTracks {\n          id\n          name\n          type\n          numQualifiedProjects\n        }\n        challenge {\n          id\n        }\n      }\n    }\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, t.Z)(["\n  query TIMELINE_STEPS_QUERY($organizationSlug: String!, $challengeSlug: String!, $token: String) {\n    challengeBySlug(\n      organizationSlug: $organizationSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      steps(orderBy: { startDate: asc }) {\n        id\n        name\n        isCurrent\n      }\n    }\n  }\n"]);
                return v = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, t.Z)(["\n  ", "\n"]);
                return L = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, t.Z)(["\n  query CHALLENGE_PARTICIPANTS_TAGS($id: ID!) {\n    challenge(id: $id) {\n      participants {\n        tags\n      }\n    }\n  }\n"]);
                return N = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, t.Z)(["\n  query CHALLENGE_CATEGORIES_QUERY(\n    $organizationSlug: String!\n    $challengeSlug: String!\n    $token: String\n  ) {\n    challengeBySlug(\n      organizationSlug: $organizationSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      categories {\n        id\n        name\n        shortDescription\n        description\n      }\n    }\n  }\n"]);
                return R = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, t.Z)(["\n  query CHALLENGE_RESOURCES_QUERY(\n    $organizationSlug: String!\n    $challengeSlug: String!\n    $token: String\n  ) {\n    challengeBySlug(\n      organizationSlug: $organizationSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      attachmentsDescription\n      attachments(orderBy: { originalFileName: asc }) {\n        id\n        name\n        originalFileName\n        mimetype\n        url\n      }\n    }\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, t.Z)(["\n  query CHALLENGE_POSITIONS_QUERY($id: ID!, $page: Int) {\n    challengePositionsById(challengeId: $id, page: $page) {\n      id\n      title\n      skills {\n        id\n        title\n        title_br\n        title_es\n        title_fr\n      }\n      state\n      project {\n        id\n        logoImageFile {\n          id\n          url\n        }\n        name\n        challenge {\n          id\n        }\n        tags\n        members {\n          id\n        }\n      }\n      canApply\n    }\n  }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, t.Z)(["\n  query CHALLENGE_POSITIONS_PAGE_INFO_QUERY($id: ID!) {\n    challengePositionsByIdPageInfo(challengeId: $id) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return D = function() {
                    return n
                }, n
            }

            function q() {
                var n = (0, t.Z)(["\n  query CHALLENGE_CUSTOM_TAB_INFO_QUERY(\n    $organizationSlug: String!\n    $challengeSlug: String!\n    $token: String\n  ) {\n    challengeBySlug(\n      organizationSlug: $organizationSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      tabs {\n        id\n        title\n        icon\n        isEnabled\n        order\n        content\n        isDefault\n        type\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"]);
                return q = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, t.Z)(["\n  query CHALLENGE_MENTORS($challengeId: String!, $page: Int) {\n    mentors(where: { challenge: { id: { equals: $challengeId } } }, page: $page) {\n      id\n      description\n      user {\n        id\n        username\n        fullName\n        jobTitle {\n          id\n          title\n          title_br\n          description\n          description_br\n        }\n        linkedInUrl\n        githubUrl\n        twitterUrl\n        homepage\n        photoImageFile {\n          id\n          url\n        }\n        coverImageFile {\n          id\n          url\n        }\n      }\n    }\n  }\n"]);
                return U = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, t.Z)(["\n  query CHALLENGE_MENTORS_PAGE_INFO($challengeId: String!) {\n    mentorsPageInfo(where: { challenge: { id: { equals: $challengeId } } }) {\n      perPage\n      pageCount\n      recordCount\n    }\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, t.Z)(["\n  ", "\n"]);
                return z = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, t.Z)(["\n  ", "\n"]);
                return B = function() {
                    return n
                }, n
            }

            function G() {
                var n = (0, t.Z)(["\n  ", "\n"]);
                return G = function() {
                    return n
                }, n
            }
            var k = (0, i.Ps)(a()),
                O = (0, i.Ps)(u()),
                Z = (0, i.Ps)(l()),
                F = (0, i.Ps)(o()),
                H = (0, i.Ps)(s()),
                Y = (0, i.Ps)(c()),
                Q = (0, i.Ps)(g()),
                j = ((0, i.Ps)(d()), (0, i.Ps)(h(), "\n  query CHALLENGE_ID_QUERY(\n    $challengeSlug: String!\n    $orgSlug: String!\n    $token: String\n  ) {\n    challengeBySlug(\n      organizationSlug: $orgSlug\n      challengeSlug: $challengeSlug\n      token: $token\n    ) {\n      id\n      name\n      shortDescription\n      logoImageFile {\n        id\n        url\n      }\n      coverImageFile {\n        id\n        url\n      }\n    }\n  }\n")),
                V = (0, i.Ps)(p()),
                W = (0, i.Ps)(f()),
                M = (0, i.Ps)(I()),
                x = (0, i.Ps)(m()),
                J = (0, i.Ps)(E()),
                K = (0, i.Ps)(S()),
                X = (0, i.Ps)($()),
                nn = (0, i.Ps)(P()),
                en = (0, i.Ps)(_()),
                rn = (0, i.Ps)(A()),
                tn = (0, i.Ps)(y()),
                an = ((0, i.Ps)(C()), (0, i.Ps)(v()), (0, i.Ps)(L(), "\n  query CHALLENGE_SERVER_SIDE_QUERY(\n    $challengeSlug: String!\n    $organizationSlug: String!\n    $token: String\n  ) {\n    challengeBySlug(\n      challengeSlug: $challengeSlug\n      organizationSlug: $organizationSlug\n      token: $token\n    ) {\n      id\n      name\n      slug\n      isClosed\n      scoreTable {\n        id\n      }\n      shortDescription\n      chatInviteUrl\n      chatInviteService\n      attachmentsDescription\n      attachments {\n        id\n      }\n      currentStep {\n        id\n        leaderboardEnabled\n        isSecretVoting\n      }\n      steps(orderBy: { startDate: asc } ) {\n        id\n        name\n        isCurrent\n        startDate\n        votingTracks {\n          id\n          name\n        }\n      }\n      keywords\n      logoImageFile {\n        id\n        url\n      }\n      coverImageFile {\n        id\n        url\n      }\n      sponsors(\n        orderBy: {\n          organization: {\n            order: desc\n          }\n        }\n        where: {\n          organization: {\n            AND: [\n              { slug: { not: { equals: $organizationSlug } } }\n              { publishInfo: { state: { equals: ACTIVE } } }\n            ]\n          }\n        }\n      ) {\n        id\n        order\n        organization {\n          id\n          slug\n          name\n          city\n          country\n          logoImageFile {\n            id\n            url\n          }\n          publishInfo {\n            state\n          }\n        }\n      }\n      prize\n      prizeDecimals\n      prizeCurrency {\n        id\n        name\n      }\n      organization {\n        id\n        slug\n        name\n        city\n        country\n        logoImageFile {\n          id\n          url\n        }\n        publishInfo {\n          state\n        }\n      }\n      metadata\n      allowedParticipants\n      participantsCount\n      startParticipantRegistrationDate\n      endParticipantRegistrationDate\n      startBackerRegistrationDate\n      endBackerRegistrationDate\n      participantForm {\n        id\n      }\n      isParticipantFormUpdatable\n      industries {\n        id\n        title\n        title_br\n        title_es\n        title_fr\n      }\n      tags {\n        title\n      }\n      categories {\n        id\n        name\n      }\n      stats {\n        id\n        totalAllocated\n        totalBacked\n      }\n      isPublic\n      registrationDomainsWhiteList\n      publishInfo {\n        id\n        draftToken\n        state\n      }\n      customLinks\n      tabs {\n        id\n        title\n        icon\n        isEnabled\n        order\n        content\n        isDefault\n        type\n        createdAt\n        updatedAt\n      }\n      mentors {\n        id\n      }\n      participants {\n        tags\n        hasSubmittedFeedback\n        user {\n          id\n          skills {\n            title\n            title_br\n            title_es\n            title_fr\n          }\n        }\n      }\n      disableAnalytics\n      matchMakingEnabled\n      maxMembersPerProject\n      privateConfiguration {\n        canUnregister\n        enableParticipantTags\n        participantTagsOptions\n        participantTagsLimit\n        enableProjectTags\n        enableProofOfParticipation\n        projectTagsOptions\n        projectTagsLimit\n      }\n    }\n  }\n"), (0, i.Ps)(N())),
                un = (0, i.Ps)(R()),
                ln = (0, i.Ps)(T()),
                on = (0, i.Ps)(b()),
                sn = (0, i.Ps)(D()),
                cn = ((0, i.Ps)(q()), (0, i.Ps)(U())),
                gn = (0, i.Ps)(w()),
                dn = (0, i.Ps)(z(), "\n  query CHALLENGE_LIVE_STAGES_QUERY(\n    $orgSlug: String!\n    $challengeSlug: String!\n  ) {\n    liveStages(\n      where: {\n        challenge: {\n          organization: { slug: $orgSlug }\n          slug: $challengeSlug\n        }\n        isVisible: true\n      }\n      orderBy: { title: asc }\n    ) {\n      id\n      challenge {\n        id\n        name\n        shortDescription\n        logoImageFile {\n          id\n          url\n        }\n        coverImageFile {\n          id\n          url\n        }\n      }\n      title\n      events(orderBy: { startsAt: asc } ) {\n        id\n        title\n        description\n        startsAt\n        endsAt\n      }\n    }\n  }\n"),
                hn = ((0, i.Ps)(B(), "\n  query CHALLENGE_LIVE_STAGE_QUERY($stageId: ID!) {\n    liveStage(id: $stageId) {\n      id\n      title\n      muxLiveStream {\n        id\n        status\n        thumbnailUrl\n        playbackUrl\n      }\n      events(orderBy: { startsAt: asc }) {\n        id\n        title\n        description\n        startsAt\n        endsAt\n      }\n    }\n  }\n"), (0, i.Ps)(G(), "\n  query CHALLENGE_VIDEO_ONDEMAND_QUERY(\n    $orgSlug: String!\n    $challengeSlug: String!\n  ) {\n    videoOnDemands(\n      where: {\n        challenge: {\n          organization: { slug: $orgSlug }\n          slug: $challengeSlug\n        }\n      }\n      orderBy: { createdAt: desc }\n    ) {\n      id\n      title\n      url\n      description\n      challenge {\n        id\n        name\n        shortDescription\n        logoImageFile {\n          id\n          url\n        }\n        coverImageFile {\n          id\n          url\n        }\n      }\n    }\n  }\n"))
        },
        43514: function(n, e, r) {
            r.d(e, {
                zp: function() {
                    return d
                },
                xJ: function() {
                    return h
                },
                fs: function() {
                    return S
                },
                Zj: function() {
                    return f
                },
                Ef: function() {
                    return m
                },
                pi: function() {
                    return p
                },
                p2: function() {
                    return I
                },
                HZ: function() {
                    return g
                },
                V6: function() {
                    return E
                },
                un: function() {
                    return $
                },
                Jn: function() {
                    return P
                },
                b2: function() {
                    return y
                }
            });
            var t = r(26042),
                i = r(69396),
                a = r(10253),
                u = r(31838),
                l = r(23470),
                o = r(11752),
                s = r.n(o)()().publicRuntimeConfig,
                c = function() {
                    return new l.ZP({
                        baseUrl: s.imageProxyUrl,
                        key: s.imageProxyKey,
                        salt: s.imageProxySalt,
                        encode: !0
                    })
                },
                g = function(n) {
                    return n ? A(n) ? _(n, u.cdn.detailLogo) : n : ""
                },
                d = function(n) {
                    return n ? A(n) ? _(n, u.cdn.detailLogo) : {
                        imageUrl: n
                    } : ""
                },
                h = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return n ? A(n) ? (0, i.Z)((0, t.Z)({}, C(n, u.cdn.detailCoverSet)), {
                        sizes: u.cdn.detailCoverSizes
                    }) : {
                        src: n
                    } : {
                        src: e
                    }
                },
                p = function(n) {
                    return n ? A(n) ? _(n, u.cdn.cardCoverSet) : n : ""
                },
                f = function(n) {
                    return n ? A(n) ? _(n, u.cdn.cardCoverSet) : n : ""
                },
                I = function(n) {
                    return n ? A(n) ? _(n, u.cdn.projectEditorUploadSet) : n : ""
                },
                m = function(n) {
                    return n ? A(n) ? _(n, u.cdn.cardAvatar) : n : ""
                },
                E = function(n) {
                    return n ? A(n) ? _(n, u.cdn.userAvatar) : n : ""
                },
                S = function(n) {
                    return n ? A(n) ? {
                        url: _(n, u.cdn.userAvatar)
                    } : {
                        url: n
                    } : {
                        url: ""
                    }
                },
                $ = function(n) {
                    return n ? A(n) ? _(n, u.cdn.userAvatar) : n : ""
                },
                P = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (n) {
                        var t = y(n);
                        if (t) return r && A(t) ? _(t, r) : t
                    }
                    return v(e)
                },
                _ = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!n) return "";
                    var r = e || {},
                        t = r.width,
                        i = void 0 === t ? 300 : t,
                        a = r.height,
                        u = void 0 === a ? 200 : a,
                        l = r.resizingType,
                        o = void 0 === l ? "fit" : l,
                        s = r.enlarge,
                        g = void 0 !== s && s;
                    if (!n || !A(n)) return n;
                    _.cdnProxy || (_.cdnProxy = c());
                    var d = _.cdnProxy.builder().resize(o, i, u, g).generateUrl(n);
                    return d
                },
                A = function(n) {
                    return "string" === typeof n && /^[a-z][a-z\d+.-]*:/.test(n)
                },
                y = function(n) {
                    return n && n.url && n.url.length > 0 ? n.url : null
                },
                C = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (n && e.length > 0) {
                        var r = (0, a.Z)(e.filter((function(n) {
                                var e = n.fallbackSrc;
                                return Boolean(e)
                            })), 1),
                            u = r[0],
                            l = u && _(n, u),
                            o = e.map((function(e) {
                                return "".concat(_(n, e), "  ").concat(e.width, "w")
                            })).reverse().join(", ");
                        return (0, i.Z)((0, t.Z)({}, l && {
                            src: l
                        }), {
                            srcSet: o
                        })
                    }
                    return null
                },
                v = function(n) {
                    switch (n) {
                        case "challenge":
                            return u.site.coverDefaultImageUrl;
                        case "user":
                        case "logo":
                        default:
                            return "";
                        case "nodefault":
                            return null
                    }
                }
        }
    }
]);