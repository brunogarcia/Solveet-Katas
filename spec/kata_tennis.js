// #### JASMINE SPEC ####
describe("Juego de Tennis", function() {
    var tennis;

    beforeEach(function() {
        tennis = new Game("bruno", "eva");
    });

    describe("Los jugadores deben poder ganar puntos", function() {
        it("Jugador 1 puntua 30", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            expect(tennis.ScoreOf(0)).toEqual("thirty");
            expect(tennis.ScoreOf(1)).toEqual("love");
        });

        it("Jugador 2 puntua 15", function() {
            tennis.PointTo(1);
            expect(tennis.ScoreOf(0)).toEqual("love");
            expect(tennis.ScoreOf(1)).toEqual("fifteen");
        });
    });

    describe("El juego debe terminar con un ganador", function() {
        it("Jugador 1 gana la partida", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(0);
            tennis.PointTo(0);

            expect(tennis.ScoreOf(0)).toEqual("winner");
            expect(tennis.ScoreOf(1)).toEqual("loser");
        });

        it("Jugador 2 gana la partida", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);

            expect(tennis.ScoreOf(0)).toEqual("loser");
            expect(tennis.ScoreOf(1)).toEqual("winner");
        });
    });

    describe("Debes de manejar la casuistica de iguales", function() {

        it("Ambos jugadores llegan a 40 puntos", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);

            expect(tennis.ScoreOf(0)).toEqual("deuce");
            expect(tennis.ScoreOf(1)).toEqual("deuce");
        });

        it("Jugador 1 con ventaja y Jugador 2 puntua: ambos iguales nuevamente", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(0);
            tennis.PointTo(1);

            expect(tennis.ScoreOf(0)).toEqual("deuce");
            expect(tennis.ScoreOf(1)).toEqual("deuce");
        });

        it("Jugador 2 con ventaja y Jugador 1 puntua: ambos iguales nuevamente", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(0);

            expect(tennis.ScoreOf(0)).toEqual("deuce");
            expect(tennis.ScoreOf(1)).toEqual("deuce");
        });

    });

    describe("Debes de manejar la casuistica de ventaja", function() {

        it("Jugador 1 con ventaja", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);

            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);

            tennis.PointTo(0);

            expect(tennis.ScoreOf(0)).toEqual("advantage");
            expect(tennis.ScoreOf(1)).toEqual("deuce");
        });

        it("Jugador 2 con ventaja", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);

            expect(tennis.ScoreOf(0)).toEqual("deuce");
            expect(tennis.ScoreOf(1)).toEqual("advantage");
        });

        it("Jugador 1 con ventaja y puntua, gana el set", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(0);
            tennis.PointTo(0);

            expect(tennis.ScoreOf(0)).toEqual("winner");
            expect(tennis.ScoreOf(1)).toEqual("loser");
        });
        it("Jugador 2 con ventaja y puntua, gana el set", function() {
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(0);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);
            tennis.PointTo(1);

            expect(tennis.ScoreOf(0)).toEqual("loser");
            expect(tennis.ScoreOf(1)).toEqual("winner");
        });
    });
});

