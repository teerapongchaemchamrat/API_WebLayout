INSERT INTO [dbo].[Employee]
    (
        [EmpID],
        [Name],
        [Position],
        [ComID],
        [Email],
        [Status]
    )
VALUES 
    (
        @EmpID,
        @Name,
        @Position,
        @ComID,
        @Email,
        @Status
    )
