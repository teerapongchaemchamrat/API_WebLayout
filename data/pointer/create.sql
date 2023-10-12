INSERT INTO [dbo].[pointer]
    (
        [x],
        [y],
        [diameter],
        [Uf_asset_SerialNumber],
        [dept],
        [stat]
    )
VALUES 
    (
        @x,
        @y,
        @diameter,
        @Uf_asset_SerialNumber,
        @dept,
        @stat
    )
SELECT SCOPE_IDENTITY() AS no