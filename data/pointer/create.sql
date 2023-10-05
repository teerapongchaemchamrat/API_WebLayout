INSERT INTO [dbo].[pointer]
    (
        [x],
        [y],
        [diameter],
        [resource_id],
        [dept]
    )
VALUES 
    (
        @x,
        @y,
        @diameter,
        @resource_id,
        @dept
    )
SELECT SCOPE_IDENTITY() AS no