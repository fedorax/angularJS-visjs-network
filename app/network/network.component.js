'use strict';

let networkComponent = {
    restrict: 'E',
    bindings: {},
    templateUrl: './network/network.compont.html',
    controllerAs: 'vm',
    controller: networkController
};

function networkController() {
    'ngInject';

    let vm = this;
    vm.name = "Hello World";

    let networkNodes = [
        { id: 1, label: 'Node 1', value: 5 },
        { id: 2, label: 'Node 2', value: 2 },
        { id: 3, label: 'Node 3', value: 8 },
        { id: 4, label: 'Node 4', value: 4 },
        { id: 5, label: 'Node 5', value: 10 }
    ];
    let networkEdges = [
        { from: 1, to: 3, value: 9, label: 'edges1' },
        { from: 1, to: 2, value: 5, label: 'edges2' },
        { from: 2, to: 4, value: 3, label: 'edges3' },
        { from: 2, to: 5, value: 7, label: 'edges4' },
        { from: 3, to: 3, value: 1, label: 'edges5' }
    ];

    vm.networkData = {
        nodes: networkNodes,
        edges: networkEdges
    };
    vm.networkOptions = {
        nodes: {
            shape: 'dot'
        },
        edges: {
            size: 20

        },
        interaction: {
            navigationButtons: true
        }
    };
}

angular
    .module('network')
    .component('network', networkComponent);