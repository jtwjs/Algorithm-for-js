/*문제74: 최장 경로 찾기

다음과 같이 노드의 연결 관계가 주어진다.
입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어진다.
우리는 이 두 정점으로 가기 위한 최대거리를 구하고자 한다.

최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지
경유할 수 있는 가장 많은 간선의 수를 말함*/

const graph = {1: [2,3,4],
               2: [1,3,4,5,6],
               3: [1,2,7],
               4: [1,2,5,6],
               5: [2,4,6,7],
               6: [2,4,5,7],
               7: [3,5,6]};

function longestRouteSearch(graph,start,end) {
    let visited = [];
    let queue = [start];
    let result = solution(queue,visited);

    

        
    
    return result;

    function solution(queue,visited) {
        let node = queue[queue.length-1];
        let length = 0;

        if (node === end) {
            return visited.length;
        }

        if(visited.includes(node)){
            return visited.length;
        } else {
            visited.push(node);
        }

        let max = [];

        for (let next_node in graph[node]){
            queue.push(graph[node][next_node])
            max.push(length, solution(queue, visited));
            length = Math.max.apply(null, max);

            queue.pop();
        }
        return length;
    }
}

console.log(longestRouteSearch(graph,1,7));