// Openness Chart
const ctx1 = document.getElementById('opennessChart');
if (ctx1) {
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Відкритість економіки (%)',
                data: [148.5, 147.7, 144.6, 143.5, 140.4, 137.4, 160.4, 174.6, 154.9, 152.0],
                borderColor: '#2d5016',
                backgroundColor: 'rgba(45, 80, 22, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#ffd700',
                pointBorderColor: '#2d5016',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14,
                            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(45, 80, 22, 0.9)',
                    titleColor: '#ffd700',
                    bodyColor: '#ffffff',
                    borderColor: '#ffd700',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 130,
                    max: 180,
                    title: {
                        display: true,
                        text: 'Відкритість (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Рік',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Radar Chart
const ctx2 = document.getElementById('radarChart');
if (ctx2) {
    new Chart(ctx2, {
        type: 'radar',
        data: {
            labels: [
                'Інновації',
                'Енергетика',
                'Продовольство',
                'Фінанси',
                'Макроекономіка',
                'Соціальна сфера'
            ],
            datasets: [{
                label: 'Рівень безпеки (0-10)',
                data: [9, 8.5, 7, 4, 5, 3],
                borderColor: '#ffd700',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                pointBackgroundColor: '#2d5016',
                pointBorderColor: '#ffd700',
                pointBorderWidth: 2,
                pointRadius: 5,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14,
                            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(45, 80, 22, 0.9)',
                    titleColor: '#ffd700',
                    bodyColor: '#ffffff',
                    borderColor: '#ffd700',
                    borderWidth: 1
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 2,
                        font: {
                            size: 12
                        }
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// Macro Chart (Inflation & Unemployment)
const ctx3 = document.getElementById('macroChart');
if (ctx3) {
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Інфляція (%)',
                data: [-0.49, 0.15, 3.42, 3.44, 2.28, -0.44, 4.65, 19.40, 9.16, 3.52],
                backgroundColor: '#ffd700',
                borderColor: '#2d5016',
                borderWidth: 2,
                yAxisID: 'y'
            }, {
                label: 'Безробіття (%)',
                data: [6.41, 6.88, 5.81, 5.41, 4.51, 6.96, 6.18, 5.57, 6.38, 7.83],
                backgroundColor: '#2d5016',
                borderColor: '#ffd700',
                borderWidth: 2,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14,
                            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(45, 80, 22, 0.9)',
                    titleColor: '#ffd700',
                    bodyColor: '#ffffff',
                    borderColor: '#ffd700',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Інфляція (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Безробіття (%)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Рік',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}