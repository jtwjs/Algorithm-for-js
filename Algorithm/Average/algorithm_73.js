/*문제73: 최단 경로 찾기

다음과 같이 노드의 연결 관계가 리스트 형태로 주어진다.
그 다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것이다.

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 
프로그램을 작성해보시오

이때 최단거리란, 정점의 중복 없이 한 정점에서 다른정점까지
갈 수 있는 가장 적은 간선의 수를 의미함*/

const graph = {'A': ['B', 'C'],
               'B': ['A','D','E'],
               'C': ['A','F'],
               'D': ['B'],
               'E': ['B','F'],
               'F': ['C','E']};

function shortestPath(graph,start,end){
    let result = 0;
    let queue = [start];
    let arr = [];

    while(queue.length !== 0) {
        let n = queue.shift();
        if(!arr.includes[n]) {
            arr.push(n);
            let sub = graph[n].filter(x => !arr.includes[x]);
            for(let node of sub){
                if(node === end) {
                    return result;
                }
                queue.push(node);
            }
            result++;
        }
    }
    return result;
}

console.log(shortestPath(graph,'A','F'));