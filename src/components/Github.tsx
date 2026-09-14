import { InlineMath } from "react-katex";

export default async function parseGithubAPI(response: any, style: number) {
    let events = response.response;
    let latestPush = (<>No recent public activity!</>)
    let type = "";
    let repo = "";
    for (let i = 0; i < events.length; i++) {
        let item = events[i];
        try {
            repo = item.repo.name.split("/")[1];
            type = item.type;
            break
        } catch (err) {
            // console.log(err + " Going next! (update)");
        }
    }
    switch (type) {
        case 'CreateEvent':
            latestPush = (
                <div>
                    Created repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                </div>
            )
            break;
        case 'DeleteEvent':
            latestPush = (
                <div>
                    Deleted repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                </div>
            )
            break;
        case 'ForkEvent':
            latestPush = (
                <div>
                    Forked repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                </div>
            )
            break;
        case 'PushEvent':
            latestPush = (
                <div>
                    Pushed to repo: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                </div>
            )
            break;
        case 'ReleaseEvent':
            latestPush = (
                <div>
                    Made release for: <a className="animateLink !p-0" href={"https://github.com/yesrealperson/" + repo}>{repo}</a><br />
                </div>
            )
            break;
    }

    switch (style) {
        case (0):
            return (
                <div className="flex flex-row items-center">
                    <img className="w-30" src={events[0].actor.avatar_url} />
                    <div className="ml-5">
                        <a href={"https://github.com/" + events[0].actor.login} className="animateLink !p-0">{events[0].actor.display_login}</a>
                        {latestPush}
                    </div>
                </div>
            )
        case (1):
            return (
                <div className="text-black my-15 px-15 p-10 h-[60vh] relative">
                    <div className="font-sans">
                        <h3 className="text-4xl font-mono">INSTRUCTIONS GIVEN, TASKS PERFORMED.</h3>
                        Latest Activity:
                        <div className="ml-5">{latestPush}</div>
                        <div className="absolute left-3 bottom-3 bg-black text-white p-5">
                            <a href={"https://github.com/" + events[0].actor.login} className="animateLink" style={{ fontFamily: "Lexend Giga" }}>VERSION CONTROL <InlineMath math="\Rsh"></InlineMath></a>
                        </div>
                    </div>
                    <img className="absolute aspect-square right-0 bottom-0 h-full" src="/IMG_3563.jpg" />
                    <div className="absolute bottom-0 w-full h-full font-mono left-0 opacity-50 text-justify z-[-1]
                    [mask-image:linear-gradient(to_bottom,transparent,transparent_10%,black_95%)]">
                        int AsyncVote(raft_t* r, char* body, int currentTerm) {"{"}
                        pthread_t threads[r-{">"}n_peers];
                        int votes = 1;
                        pthread_mutex_t lock;
                        pthread_mutex_init(&lock, NULL);

                        for (int i = 0; i {"<"} r-{">"}n_peers; i++) {"{"}
                        VoteArgs_t* arg = malloc(sizeof(VoteArgs_t));
                        arg-{">"}client = r-{">"}peers[i];
                        arg-{">"}body = strdup(body);
                        arg-{">"}votes = &votes;
                        arg-{">"}lock = &lock;
                        arg-{">"}currentTerm = currentTerm;

                        pthread_create(&threads[i], NULL, AsyncVoteHelper, arg);
                        {"}"}

                        for (int i = 0; i {"<"} r-{">"}n_peers; i++) {"{"}
                        pthread_join(threads[i], NULL);
                        {"}"}

                        pthread_mutex_destroy(&lock);
                        return votes;
                        {"}"}

                        static void StartElection(raft_t* r) {"{"}
                        pthread_mutex_lock(&r-{">"}lock);
                        r-{">"}currentTerm++;    //Incrememnts current
                        r-{">"}state = 1;        // Transitions into candidate
                        r-{">"}votedFor = r-{">"}me; // Votes for itself
                        r-{">"}heartbeat = now();
                        int currentTerm = r-{">"}currentTerm;
                        int lastIndex = last_log(r)-{">"}index;
                        int lastTerm = last_log(r)-{">"}term;
                        pthread_mutex_unlock(&r-{">"}lock);

                        // Build request body
                        cJSON* j = cJSON_CreateObject();
                        cJSON_AddNumberToObject(j, "term", currentTerm);
                        cJSON_AddNumberToObject(j, "candidateId", r-{">"}me);
                        cJSON_AddNumberToObject(j, "lastLogIndex", lastIndex);
                        cJSON_AddNumberToObject(j, "lastLogTerm", lastTerm);
                        char* body = cJSON_PrintUnformatted(j);
                        cJSON_Delete(j);

                        int votes = AsyncVote(r, body, currentTerm);

                        free(body);

                        pthread_mutex_lock(&r-{">"}lock);

                        if (r-{">"}state != 1 || r-{">"}currentTerm != currentTerm) {"{"}
                        pthread_mutex_unlock(&r-{">"}lock);
                        return;
                        {"}"}

                        if (votes {">"} r-{">"}n_peers / 2) {"{"}
                        r-{">"}state = 2;

                        int leaderLastIndex = last_log(r)-{">"}index;

                        for (int i = 0; i {"<"} r-{">"}n_peers; i++) {"{"}
                        r-{">"}nextIndex[i] = leaderLastIndex + 1;
                        r-{">"}matchIndex[i] = 0;
                        {"}"}

                        r-{">"}matchIndex[r-{">"}me] = leaderLastIndex;
                        r-{">"}nextIndex[r-{">"}me] = leaderLastIndex + 1;

                        pthread_mutex_unlock(&r-{">"}lock);

                        for (int peer = 0; peer {"<"} r-{">"}n_peers; peer++) {"{"}
                        if (peer != r-{">"}me) {"{"}
                        SendAppendEntries(r, peer);
                        {"}"}
                        {"}"}

                        return;
                        {"}"}

                        r-{">"}state = 0;
                        pthread_mutex_unlock(&r-{">"}lock);
                        {"}"}

                        static void* ElectionTimeout(void* arg) {"{"}
  // Checks if heartbeat changes between sleeps
                        // As follower: If it doesn't start election
                        // As leader: send heartbeats
                        raft_t* r = (raft_t*)arg;
                        while (1) {"{"}
                        usleep(50 * 1000);
                        int timeout = rand() % (800 - 400 + 1) + 400;
                        pthread_mutex_lock(&r-{">"}lock);

                        int state = r-{">"}state;
                        int64_t elapsed = now() - r-{">"}heartbeat;
                        bool shouldStartElection = state != 2 && elapsed {">"}= timeout;

                        pthread_mutex_unlock(&r-{">"}lock);

                        if (state == 2) {"{"}
                        for (int peer = 0; peer {"<"} r-{">"}n_peers; peer++) {"{"}
                        if (peer != r-{">"}me) {"{"}
                        SendAppendEntries(r, peer);
                        {"}"}
                        {"}"}
                        {"}"} else if (shouldStartElection) {"{"}
                        StartElection(r);
                        timeout = rand() % (800 - 400 + 1) + 400;
                        {"}"}
                        {"}"}
                        {"}"}

                        void raft_free(raft_t* r) {"{"}
                        if (!r)
                        return;

                        pthread_join(r-{">"}timeout_thread, NULL);

                        pthread_mutex_lock(&r-{">"}lock);
                        free_logs(&r-{">"}logs);
                        free(r-{">"}nextIndex);
                        free(r-{">"}matchIndex);
                        pthread_mutex_unlock(&r-{">"}lock);

                        pthread_mutex_destroy(&r-{">"}lock);
                        free(r);
                        {"}"}

                        raft_t* raft_new(int me, rpc_client_t** peers, int n_peers, persister_t* p) {"{"}
                        raft_t* r = calloc(1, sizeof(raft_t));
                        r-{">"}me = me;
                        r-{">"}n_peers = n_peers;
                        r-{">"}peers = peers;
                        r-{">"}persister = p;

                        r-{">"}currentTerm = 0;
                        r-{">"}votedFor = -1;
                        r-{">"}state = 0;
                        r-{">"}commitIndex = 0;
                        r-{">"}heartbeat = now();

                        pthread_mutex_init(&r-{">"}lock, NULL);
                        list_init(&r-{">"}logs);

                        r-{">"}nextIndex = calloc(n_peers, sizeof(int));
                        r-{">"}matchIndex = calloc(n_peers, sizeof(int));

                        for (int i = 0; i {"<"} n_peers; i++) {"{"}
                        r-{">"}nextIndex[i] = 1;
                        r-{">"}matchIndex[i] = 0;
                        {"}"}
                        srand(time(NULL) + me * 100);

                        log_t* sentinel = calloc(1, sizeof(log_t));
                        sentinel-{">"}term = 0;
                        sentinel-{">"}index = 0;
                        sentinel-{">"}command = strdup("");

                        list_push_back(&r-{">"}logs, &sentinel-{">"}elem);

                        pthread_create(&r-{">"}timeout_thread, NULL, ElectionTimeout, r);

                        return r;
                        {"}"}
                    </div>
                    <div className="bg-gray-200 absolute bottom-0 w-full h-full left-0 z-[-2]"></div>
                </div>
            )
    }
}