const MissionComander = require("../app/missionCommander")
describe("Unit Test for MissionComander Class ",()=>{
    test("1) Create a mission commander object",()=>{
        const missionCommander = new MissionComander('Woopa')
        expect(missionCommander.name).toBe("Woopa")
    })
})